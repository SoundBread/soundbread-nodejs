'use strict';

var ws = require('nodejs-websocket');
var connect = require('connect');
var serveStatic = require('serve-static');
var url = require('url');

var port = process.env.PORT || 8080;

connect().use(serveStatic(__dirname + '/webroot')).listen(port, function() {
	console.log('WebServer running on port '+port+'...');
});

var server = ws.createServer(function(conn) {
	var connStr = socketRemoteStr(conn.socket);
	console.log('New connection from ' + connStr + ' for ' + conn.path);
	conn.on('text', function(str) {
		console.log(socketRemoteStr(this.socket) + '> ' + str);

		broadcast(server, str);
	});
	conn.on('close', function(code, reason) {
		console.log('Connection closed: ' + code + ', ' + reason);
	});
}).listen(8000);

var stdin = process.openStdin();
stdin.addListener('data', function(d) {
	console.log('Clients: ' + server.connections.length);
	server.connections.forEach(function(conn) {
		console.log('- ' + socketRemoteStr(conn.socket));
	});
});

function broadcast(server, msg) {
	server.connections.forEach(function(conn) {
		console.log(socketRemoteStr(conn.socket) + '< ' + msg);
		conn.sendText(msg);
	});
}

function socketRemoteStr(socket) {
	return socket.remoteAddress + ':' + socket.remotePort;
}
