// module
var http = require('http');


var server = http.createServer(function(request,respond){
    console.log("Server On");
    respond.end();
});

server.listen(8000);