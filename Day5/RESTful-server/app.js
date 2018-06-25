// module
var http = require('http');
var express = require('express');
var bodyParse = require('body-parser');
//var fs = require('fs');
var db = require('./database');

// connect database 
var database = db.dummyDB;

// create server
var app = express();

// middleware 
app.use(bodyParse.urlencoded({
    extended : false,
}));

// setup router

// redirection
app.get('/',function(req,res){
    res.redirect('/user');
});

// 전체 사용자 정보 조회
app.get('/user',function(req,res){
    res.send(database.get());
});

// id 값을 전달해서 특정 사용자 조회
app.get('/user/:id', function(req,res){
    
    // id 값 추출
    var id = req.params.id;

    // id를 이용해서 사용자 정보 조회
    res.send(database.get(req.params.id));
});

app.post('/user/',function(req,res){
    // 입력 받은 데이터 추출.
    var data = {
        name:req.body.name,
        region : req.body.region
    }

    // 데이터 베이스에 저장
    if(data.name && data.region){
        res.send(database.insert(data));
    }else {
        throw new Error('error');
    }
});

// 데이터 갱신
app.put('/user/:id',function(req,res){
    // 데이터 추출
    var id = req.params.id;
    var name = req.body.name;
    var region = req.body.region;

    // 데이터 조회
    var item = database.get(id);
    item.name = name || item.name;  // 앞의 값이 없다면 뒤의 값을 이용.
    item.region = region || item.region;


    // 요청 응답.
    res.send(item);
});

app.delete('/user/:id',function(req,res){
    
    // id 값 추출
    var id = req.params.id;
    res.send(database.remove(id));
    
});

// run server
http.createServer(app).listen(8000);
console.log('Server running...');

