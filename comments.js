// Create web server
// Node.js has a built-in module called http, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// Load the http module to create an http server.
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = [];
var server = http.createServer(app);
var io = require('socket.io')(server);
var port = 3000;
var ip = 'localhost';
var server = app.listen(port, function() {
  console.log('Server running at http://localhost:' + port + '/');
});