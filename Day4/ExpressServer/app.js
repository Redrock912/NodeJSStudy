//모듈 추출
var http = require('http');
var express =require('express');

// express 객체 생성
var app = express();

// // 요청 처리, use는 일반적인 서버를 만들 때 사용. 
// app.use(function(req,res){

//     // Get 요청에서 전달받은 정보 읽기.
//     var id = req.query.id;
//     var pw = req.query.pw;

//     var data = {
//         'id' : id,
//         'pw' : pw
//     };

//     res.send(data);

//     // var data = {
//     //     name: 'Henry',
//     //     region : 'England',
//     //     position: {
//     //         x:'30',
//     //         y:'1',
//     //         z:'2'
//     //     }
//     // }

//     // var jsonString = JSON.stringify(data);

//     // res.writeHead(200,{'Content-Type':'text/plain'});
//     // res.write(jsonString);
//     // res.end();

//     // json 객체를 바로 받으면 해석을 못함. 그래서 윗식에서는 바꿔서 전달. send는 express안의 모듈
//     //res.send(data);
// });

// 요청 처리
// app.post();
// app.get('/', function(req,res){

//     //User-Agent 속성 출력
//     console.log(req.header('User-Agent'));

//     var agent = req.header('User-Agent');
//     // if(agent.toLowerCase().match("chrome")){
//     //     res.send("Hello Chrome");
//     // }else if(agent.toLowerCase().match('firefox')){
//     //     res.send('Hello Firefox');
//     // }else {
//     //     res.send('Hello Edge');
//     // }

//     // Get 요청에서 전달받은 정보 읽기.
//     var id = req.query.id;
//     var pw = req.query.pw;

//     var data = {
//         'id' : id,
//         'pw' : pw
//     };

//     res.send(data);

// });

// use 안의 함수들은 미들웨어라 부른다.
app.use(function(req,res,next){
    console.log('first');
    next();
});

app.use(function(req,res,next){
    console.log('second');
    next();
});

app.use(function(req,res,next){
    console.log('third');
    
    res.send('Express Server');
});

// 서버 생성
// http.createServer(app).listen(8000);
app.listen(8000);
console.log('Express server on..');