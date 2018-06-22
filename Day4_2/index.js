// module
var http = require('http');
var express = require('express');
var multiparty = require('connect-multiparty');
var fs = require('fs');
var path = require('path');

// create server
var app = express();

// setup upload directory
var setting = {
    uploadDir: './upload'
}

//multiparty.uplaodDir ='./upload';
//multiparty.uplaodDir = __dirname + './upload';
//multiparty.uplaodDir = path.join(__dirname,'upload');

// middleware setup & directory setup
app.use(multiparty({
    uploadDir: __dirname + '/upload'
}));



// routing setup
app.get('/', function (req, res) {
    fs.readFile('./htmlPage.html', function (error, html) {
        res.send(html.toString());
    })
});
app.post('/', function (req, res) {
    // requested info 
    //console.log(req.body);
    console.log(req.files.image.path);

    fs.rename(req.files.image.path, './upload/show.png', function (error) {

        // redirect to root
        res.redirect('/');
    })

});

// port setup reference
var port = process.env.port || 8000; // if true -> front , false -> back


// run server
http.createServer(app).listen(port);
console.log('Server on..');
