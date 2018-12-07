console.log("Program Started");

var http = require('http');

var server = http.createServer(function (request, response) {
    console.log("Processing Request");
    response.writeHead(200, {"Content-Type": "text/plain"})
}