//module
var http = require('http');
var express =require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');

// setup database
var client = mysql.createConnection({
    user: 'root',
    password: 'admin',
    database: 'restdb'
});

// connect database
client.connect();

// check data
// 'insert into UserInfo (name, region) values ("asdf", "KR")' ---> values ('"' + name + ',' + region +'"'); 원래는 이렇게 써야하지만 이 귀찮은 방식을 .query가 해결해준다.
client.query('insert into UserInfo(name,region) values (?,?)', ['Ronnie','HR'], function(){

});

client.query('select * from UserInfo', function(error,result,fields){
    if(error){
        console.log('Error: ' + error);
    } else {
        console.log(result);
    }
})

// create server
var app = express();

// middleware
app.use(bodyParser.urlencoded({extended:false}));

// setup routing

// run server
http.createServer(app).listen(8000);
console.log('Server running ... ');