const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/khachatur') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello babo hits Khachatur\n');
    }
    if(req.url === '/balkon') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Life is good\n');
    }
    if(req.url === '/fogs') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('anhappy life\n');
    }
   
    if(req.url === '/vazgen') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Vazgen is cheburator\n');
    }
     if(req.url === '/grade') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('my grade is definetly 100;)\n');
    }
	else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }
	
});
httpServer.listen(8080);


