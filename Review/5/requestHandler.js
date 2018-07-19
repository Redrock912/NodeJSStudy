//module 
var fs = require('fs');
var url = require('url');

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
    respond.writeHead(200,{'Content-Type':'text/html'});
    respond.write('Show...');
    respond.end();
};


module.exports = {
    start:start,
    show:show
}