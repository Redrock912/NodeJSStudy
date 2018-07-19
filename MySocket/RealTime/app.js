// module
var express = require('express');
var http = require('http');
var socketIO = require('socket.io');
var axios = require('axios');
var index = require('./routes/index');


// var port = process.env.PORT || 8000;

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

let interval;

io.on("connection", socket => {
    console.log("New Client Connected"), setInterval(() => getApiAndEmit(socket),10000);

    socket.on("disconnect" , () => console.log("Client disconnected"));
})


 var getApiAndEmit = async socket => {
     try{
         const res = await axios.get(
             "https://api.darksky.net/forecast/37ddc9446064a1ecd34472b422be71dd/43.7695,11.2558"
         );
         socekt.emit("FromAPI", res.data.currently.temperature);
     }catch(error){
         console.error('Error: ${error.code}');
     }
 }

//  server.listen(port, () => console.log('Listening on port ${port}'));

server.listen(8000, function(){
    console.log('Listening on port 8000');
});


