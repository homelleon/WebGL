/**
 * 
 */
var http = require('http');
var fs = require('fs');

console.log('Starting server...');

var server = http.createServer().listen(8080);

server.on('request', function(request, response) {
	if(request.url == '/stop') {
		request.connection.destroy();
		server.close();
	} else {
		if(request.url == '/bundle.js') {
			response.writeHead(200,
					{'Content-type':'script/javascript'});
			fs.readFile('bundle.js', function(error, content) {
				response.write(decodeURIComponent(content));
				response.end();
			});			
		} else if(request.url == '/style.css') {
			response.writeHead(200,
					{'Content-type':'text/css'});
			fs.readFile('style.css', function(error, content) {
				response.write(decodeURIComponent(content));
				response.end();
			});	
		} else {
			response.writeHead(200,
					{'Content-type':'text/html;charset=utf-8'});
			
			fs.readFile('index.html', function(error, content) {
				response.write(decodeURIComponent(content));
				response.end();
			});
		}
	}
});

server.on('connection', function() {
	console.log('[CONSOLE]: User connected!');
});

server.on('listening', function() {
	console.log('[CONSOLE]: Listening on 8080');
});

server.on('close', function() {
	console.log('[CONOSLE]: Server stopped.');
});