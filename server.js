'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Server settings
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use('/settings.js', function(req, res, next) {
	if(process.env.OPENSHIFT_NODEJS_PORT !== undefined) {
		res.sendFile(__dirname + '/settings.openshift.js');
		return;
	} else {
		res.sendFile(__dirname + '/settings.default.js');
		return;
	}
	next();
});
app.use(express.static(__dirname + '/webroot'))

// Client counter
var sockets = 0;

// New connection, add to the pool
io.on("connection", function(socket){
	sockets++;
	console.log("Client joined, now: "+sockets);
	io.sockets.emit('clients', sockets);

	// Connection closed, remove from pool
	socket.on("disconnect", function(){
		sockets--;
		console.log("Client left, now: "+sockets);
		io.sockets.emit('clients', sockets);
	});

	// Client wants to play audio
	socket.on("play", function(data){
		console.log("Playing audio: "+data);
		io.sockets.emit('play', data);
	});
});

// Start server
server.listen(port, ipaddress, function(){
	console.log("Server started listening on port: "+ port);
});
