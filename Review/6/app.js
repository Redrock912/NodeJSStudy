// module
var http = require('http');
var requestHandler = require('./requestHandler');

var handle = {
    '/': requestHandler.start,
    '/start': requestHandler.start,
    '/show': requestHandler.show,
    '/upload':requestHandler.upload
};

var server = http.createServer(function (req, res) {
    if (typeof handle[req.url] === 'function') {
        handle[req.url](req,res);
    } else {
        //404 not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('404 Not Fooound');
        res.end();
    }

    
    console.log("Server On...");
});

server.listen(8000);
