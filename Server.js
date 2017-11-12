/**
 * 
 */
var http = require('http');

http.createServer(function(request, response) {
	response.end("Server started");
}).listen(3000);

console.log("hi!");