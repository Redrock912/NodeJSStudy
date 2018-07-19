// module
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var database = require('./database');
var requestHandler = require('./requestHandler');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));



function HandleCreator(method, path, callback) {
    this.method = method;
    this.path = path;
    this.callback = callback;
};

// 핸들 객체 설정.
var handle = [
    new HandleCreator('get', '/', requestHandler.start),
    new HandleCreator('get', '/user', requestHandler.showTotalUser),
    new HandleCreator('get', '/user/:id', requestHandler.showUser),
    new HandleCreator('post', '/user', requestHandler.insertUser),
    new HandleCreator('put', '/user/:id', requestHandler.updateUser),
    new HandleCreator('delete', '/user/:id', requestHandler.removeUser),
];


// Set Router function
function setRouter(app, handle) {
    for (var ix in handle) {
        switch (handle[ix].method) {
            case 'get': app.get(handle[ix].path, handle[ix].callback); break;
            case 'post': app.post(handle[ix].path, handle[ix].callback); break;
            case 'put': app.put(handle[ix].path, handle[ix].callback); break;
            case 'delete': app.delete(handle[ix].path, handle[ix].callback); break;
            default: break;
        }
    }
};
requestHandler.connectDB(database);
setRouter(app, handle);

http.createServer(app).listen(8000);
console.log('서버 실행중');

// app.get('/', function(request,respond){
//     console.log('Get requested');
//     fs.readFile('./postHtml.html', function(error,data){
//         respond.writeHead(200,{'Content-Type':'text/html'});
//         respond.end(data);
//     })
// })

// app.get('/show',function(request,respond){
//     fs.readFile('./test.png', function(error,data){
//         respond.writeHead(200,{'Content-Type':'image/png'});
//         respond.write(data);
//         respond.end();
//     });
// });

// app.post('/upload', function(request,respond){
//     var form = new formidable.IncomingForm();

//     form.parse(request, function(error,field,files){
//         console.log('parsing done');

//         fs.rename(files.image.path, './test.png', function(error){
//             respond.writeHead(200,{'Content-Type': 'text/html'});
//             respond.write('<img src ="/show"/>');
//             respond.end();
//         });
//     });
// });


// http.createServer(app).listen(8000);

