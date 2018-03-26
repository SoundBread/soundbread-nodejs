'use strict';

require('console-stamp')(console, 'HH:MM:ss.l');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var pjson = require('./package.json');
var cors = require('cors');
var sounds = require('./core/sound/sounds');
var Store = require('server-store');

// Server settings
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var maxcredits = 5;
var creditTimeout = 10 * 1000; // in ms
var youtubeCost = 1;

// Persistent data
var creditStore = new Store('SoundBread', 'creditStore'); // (AppName, StorageName)

// Serve settings file
app.use('/settings.js', function(req, res, next) {
	if (process.env.OPENSHIFT_NODEJS_PORT !== undefined) {
		res.sendFile(__dirname + '/settings.openshift.js');
		return;
	} else if (process.env.LOCAL !== undefined) {
		res.sendFile(__dirname + '/settings.local.js');
		return;
	} else {
		res.sendFile(__dirname + '/settings.default.js');
		return;
	}
});

// API
app.get('/api/sounds', cors(), function(req,res){
	res.json(sounds);
});

// Serve static files
app.use(express.static(__dirname + '/webroot'));

// Clients
var clients = {};
clients.size = function(){
	var size = 0, key;
	for (key in clients) {
		if (clients.hasOwnProperty(key))
		{
			size++;
		}
	}
	return size-1;
};

// Credit timer
function createTimeout(socket) {
	var credittimer = setTimeout(function(){
		var hiddenid = clients[socket.id].hiddenid;
		var credits = creditStore.getItem(hiddenid);
		if (credits < maxcredits) {
			credits++;
			creditStore.setItem(hiddenid, credits);
			socket.emit('credits', credits);
			console.log('User ' + socket.id + ' now has ' + credits + ' credits');
		}
		createTimeout(socket);
	}, creditTimeout);
	clients[socket.id].credittimer = credittimer;
	return credittimer;
}

function retreiveCredits(socket) {
	var hiddenid = clients[socket.id].hiddenid;
	var credits = creditStore.getItem(hiddenid);
	console.log('User ' + socket.id + ' has ' + credits + ' credits.');
	if (credits === undefined) {
		credits = maxcredits;
		creditStore.setItem(hiddenid, credits);
		console.log('Giving user ' + socket.id + ' initial amount of credits: ' + maxcredits);
	}
	return credits;
}

// returns true if enough credits are available
function useCredits(socket, amount) {
	var hiddenid = clients[socket.id].hiddenid;
	var credits = retreiveCredits(socket);
	if (credits !== undefined && credits >= amount) {
		credits -= amount;
		creditStore.setItem(hiddenid, credits);
		socket.emit('credits', credits);
		console.log('User ' + socket.id + ' now has ' + credits + ' credits');
		return true;
	}
	return false;
}

// New connection, add to the pool
io.on('connection', function(socket){
	clients[socket.id] = {};
	console.info('Client joined, now: '+ clients.size());
	socket.emit('version', pjson.version);
	io.sockets.emit('clients', clients.size());

	// Connection closed, remove from pool
	socket.on('disconnect', function(){
		clearTimeout(clients[socket.id].credittimer);
		delete clients[socket.id];
		console.info('Client left, now: '+clients.size());
		io.sockets.emit('clients', clients.size());
	});

	// Client wants to play audio
	socket.on('play', function(data){
		clients[socket.id].hiddenid = data.hiddenid;

		var cost = sounds.filter(function(x) { return x.id === data.soundId; })[0].cost;
		if (cost === undefined) { cost = 1; }

		if (useCredits(socket, cost)) {
			console.log('Playing audio: '+data.soundId+' by ' + clients[socket.id].name);
			var playData = {audio: data.soundId, user: clients[socket.id].name};
			io.sockets.emit('play', playData);
		} else {
			socket.emit('errormsg','Not enough credits');
		}
	});

	socket.on('youtube', function(data){
		clients[socket.id].hiddenid = data.hiddenid;

		var cost = youtubeCost;
		if(useCredits(socket, cost)) {
			console.log('Playing youtube: '+data.youtubeId+' from '+data.start+' to '+data.end+' by ' + clients[socket.id].name);
			var playData = {id: data.youtubeId, start: data.start, end: data.end, user: clients[socket.id].name};
			io.sockets.emit('youtube', playData);
		} else {
			socket.emit('errormsg','Not enough credits');
		}
	});

	socket.on('killswitch', function(data) {
		var hiddenid = clients[socket.id].hiddenid;
		// Kill switch costs all user credits and at least 1
		var credits = Math.max(1, creditStore.getItem(hiddenid));
		if(useCredits(socket, credits)) {
			io.sockets.emit('killswitch', {user: clients[socket.id].name});
		}
	});

	socket.on('name', function(name) {
		name = name.substr(0, 20);
		console.log('User ' + socket.id + ' changed name from ' + clients[socket.id].name + ' to ' + name);
		clients[socket.id].name = name;
		io.sockets.emit('name', name);
	});

	socket.on('hiddenid', function(hiddenid) {
		console.log('User ' + socket.id + ' set hiddenid from ' + clients[socket.id].hiddenid + ' to ' + hiddenid);
		clients[socket.id].hiddenid = hiddenid;
		socket.emit('credits', retreiveCredits(socket));
		createTimeout(socket);
	});
});

// Start server
server.listen(port, ipaddress, function(){
	console.info('Server ('+pjson.version+') started listening on port: '+ port);
});
