// module
var http = require('http');
var cookieParser = require('cookie-parser');
var express =require('express');


// create server
var app = express();

// middleware
app.use(cookieParser());

// routing
app.get('/', function(request,response){
    
    response.clearCookie('userid');
    response.redirect('/setCookie');
});

app.get('/getCookie', function(request,response){
    // read cookie
    response.send(request.cookies);
})

app.get('/setCookie', function(request,response){
    // create cookie
    response.cookie('userid','Leset');
    
    // 응답
    response.redirect('/getCookie');
});

http.createServer(app).listen(8000);
console.log('Server on...');