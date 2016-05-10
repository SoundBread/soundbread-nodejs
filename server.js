'use strict';

var WebSocketServer = require("ws").Server;
var http = require('http');
var express = require('express');
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var app = express();

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
		sockets.forEach(function(socket) {
			socket.send(msg);
		});
	});
});
