/**
 * Created by root on 16/03/2016.
 */

var http = require('http');

var hostname  = 'localhost';
var port = 3000;

var server =  http.createServer(function(request, respon) {
    console.log(request.headers);

    respon.writeHead(200, {'Content-Type': 'text/html'});
    respon.end('<html><body><h1>Hello world</h1></body></html>');
});

server.listen(port, hostname, function() {
    console.log('Server running at http://' + hostname +':' + port + '/');
});