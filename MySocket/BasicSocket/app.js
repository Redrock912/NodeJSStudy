//module
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(req,res){
    fs.readFile('./htmlPage.html',function(error,html){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(html);
    });
});

server.listen(8000,function(){
    console.log('server on..');
})

var io = socketio.listen(server);
io.sockets.on('connection',function(socket){
    //message event
    socket.on('message',function(data){
        io.sockets.emit('message',data);
    });
});