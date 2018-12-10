console.log("Program Started");

var http = require('http');

var server = http.createServer(function (request, response) {
    console.log("Processing Request for URL: " + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

server.listen(8000);
console.log("Program Ended");