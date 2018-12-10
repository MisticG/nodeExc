console.log("Started Program");
var express = require('express');
var app = express();

app.get('/', function (request, response) {
    console.log("Handling Request");
    response.send('Hello Express');
    console.log("Done Handling Process");
})

app.listen(8000);
console.log("Ended Program");