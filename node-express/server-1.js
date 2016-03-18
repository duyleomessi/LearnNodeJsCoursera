/**
 * Created by root on 17/03/2016.
 */

'use strict';

var express = require('express');
var http = require('http');

var hostname = 'localhost';
var post = 3000;

var app = express();

app.use(function(req, res, next) {
    console.log(req.headers);

    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>Hello world</h1>');
});

var server = http.createServer(app);

server.listen(post, hostname, function() {
    console.log('Server running at http://' + hostname + ':' + post + '/');
});

