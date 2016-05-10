'use strict';

var WebSocketServer = require("ws").Server;
var http = require('http');
var express = require('express');
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var app = express();

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

var server = http.createServer(app);
server.listen(port, ipaddress, function(){
	console.log("Server started listening on port: "+ port);
});

// The pool
var sockets = [];

var wsServer = new WebSocketServer({server: server});

// New connection, add to the pool
wsServer.on("connection", function(ws){
	sockets.push(ws);
	console.log("Client joined, now: "+sockets.length);

	var cmd = {command: 'clients', count: sockets.length};
	broadcast(JSON.stringify(cmd));

	// Connection closed, remove from pool
	ws.on("close", function(){
		var i = sockets.indexOf(ws);
		if (i != -1) {
			sockets.splice(i,1);
		}
	});

	// Client sends message, echo to the pool
	ws.on("message", function(msg, flags){
		console.log("received message: "+msg);
		var obj = JSON.parse(msg);

		if(obj.command == 'play') {
			var cmd = {command: 'play', id: obj.id};
			broadcast(JSON.stringify(cmd));
		} else if(obj.command == 'clients') {
			var cmd = {command: 'clients', count: sockets.length};
			this.send(JSON.stringify(cmd));
		}
	});
});

function broadcast(msg) {
	sockets.forEach(function(socket) {
		socket.send(msg);
	});
}
