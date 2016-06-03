'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var pjson = require('./package.json');

// Server settings
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var maxcredits = 5;

app.use('/settings.js', function(req, res, next) {
	if(process.env.OPENSHIFT_NODEJS_PORT !== undefined) {
		res.sendFile(__dirname + '/settings.openshift.js');
		return;
	} else if (process.env.LOCAL !== undefined) {
		res.sendFile(__dirname + '/settings.local.js');
		return;
	} else {
		res.sendFile(__dirname + '/settings.default.js');
		return;
	}
	next();
});
app.use(express.static(__dirname + '/webroot'))

// Clients
var clients = new Object();
clients.size = function(){
	var size = 0, key;
	for (key in clients) {
			if (clients.hasOwnProperty(key)) size++;
	}
	return size-1;
}

// Credit timer
function createTimeout(socket) {
	var credittimer = setTimeout(function(){
		if (clients[socket.id].credits < maxcredits) {
			clients[socket.id].credits++;
			socket.emit('credits', clients[socket.id].credits);
			clients[socket.id].credittimer = createTimeout(socket);
		}
	}, 10000);
	return credittimer;
}

// New connection, add to the pool
io.on("connection", function(socket){
	clients[socket.id] = {
		'credits': maxcredits
	};
	console.log("Client joined, now: "+ clients.size());
	socket.emit('version', pjson.version);
	io.sockets.emit('clients', clients.size());
	socket.emit('credits', clients[socket.id].credits);

	// Connection closed, remove from pool
	socket.on("disconnect", function(){
		clearTimeout(clients[socket.id].credittimer);
		delete clients[socket.id];
		console.log("Client left, now: "+clients.size());
		io.sockets.emit('clients', clients.size());
	});

	// Client wants to play audio
	socket.on("play", function(data){
		if (clients[socket.id].credits > 0) {
			console.log("Playing audio: "+data);
			io.sockets.emit('play', data);
			clients[socket.id].credits--;
			socket.emit('credits', clients[socket.id].credits);
			clearTimeout(clients[socket.id].credittimer);
			clients[socket.id].credittimer = createTimeout(socket);
		} else {
			socket.emit('errormsg','Not enough credits');
		}
	});
});

// Start server
server.listen(port, ipaddress, function(){
	console.log("Server ("+pjson.version+") started listening on port: "+ port);
});
