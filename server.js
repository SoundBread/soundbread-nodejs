var ws = require('nodejs-websocket');
var connect = require('connect');
var serveStatic = require('serve-static');
var url = require('url');

connect().use(serveStatic(__dirname + '/webroot')).listen(8080, function() {
	console.log('Server running on 8080...');
});

var server = ws.createServer(function(conn) {
	console.log('New connection: ' + conn.path);
	conn.on('text', function(str) {
		//TODO: log client IP
		console.log('> ' + str);

		broadcast(server, str);
	});
	conn.on('close', function(code, reason) {
		console.log('Connection closed: ' + code + ', ' + reason);
	});
}).listen(8001);

function broadcast(server, msg) {
	server.connections.forEach(function(conn) {
		console.log('< ' + msg);
		conn.sendText(msg);
	});
}
