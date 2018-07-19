//module 
var fs = require('fs');
var url = require('url');
var formidable = require('formidable');

function start(request,respond){

    if(request.method == 'GET'){
        console.log('Get requested');
        fs.readFile('./postHtml.html', function(error,data){
            respond.writeHead(200,{'Content-Type':'text/html'});
            respond.end(data);
        })
    }else if (request.method == 'POST'){
        console.log('Post requested');
        request.on('data',function(data){


            respond.writeHead(200,{'Content-Type':'text/html'});
            respond.end(data);

        });
    }
   
};

function show(request, respond){
    fs.readFile('./test.png', function(error,data){
        respond.writeHead(200,{'Content-Type':'image/png'});
        respond.write(data);
        respond.end();
    })
};

function upload(request,respond){
    var form = new formidable.IncomingForm();

    form.parse(request, function(error,field,files){
        console.log('parsing done');

        fs.rename(files.image.path, './test.png', function(error){
            respond.writeHead(200,{'Content-Type': 'text/html'});
            respond.write('<img src ="/show"/>');
            respond.end();
        });
    });
}

module.exports = {
    start:start,
    show:show,
    upload:upload
}