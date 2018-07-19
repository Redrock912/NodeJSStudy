// module
var http = require('http');
var express = require('express');
var formidable = require('formidable');
var fs = require('fs');


var app = express();



app.get('/', function(request,respond){
    console.log('Get requested');
    fs.readFile('./postHtml.html', function(error,data){
        respond.writeHead(200,{'Content-Type':'text/html'});
        respond.end(data);
    })
})

app.get('/show',function(request,respond){
    fs.readFile('./test.png', function(error,data){
        respond.writeHead(200,{'Content-Type':'image/png'});
        respond.write(data);
        respond.end();
    });
});

app.post('/upload', function(request,respond){
    var form = new formidable.IncomingForm();

    form.parse(request, function(error,field,files){
        console.log('parsing done');

        fs.rename(files.image.path, './test.png', function(error){
            respond.writeHead(200,{'Content-Type': 'text/html'});
            respond.write('<img src ="/show"/>');
            respond.end();
        });
    });
});


http.createServer(app).listen(8000);

