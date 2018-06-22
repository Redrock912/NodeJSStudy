// 모듈 추출
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// 서버 생성
var app = express();

// 라우터 설정
var routerA = express.Router();
var routerB = express.Router();

routerA.post('/login',function(req,res){
    // 이름과 지역 속성 파싱
    var name = req.body.name;
    var region = req.body.region;

    var data= {
        name : name,
        region: region
    }

    var jsonString = 'Get data '
    // res.write(JSON.stringify(data));
    res. send(data);
})

routerB.get('/index', function(req,res){
    res.send('Index Page B');
});

// 라우터 적용
app.use(bodyParser.urlencoded({ extended: false })); // 바디 파서가 먼저와야 한다.
//app.use(bodyParser()); // 구 버젼
app.use('/a',routerA); // /a/index
app.use('/b',routerB); // /b/index



// app.get('/a', function(req,res){
//     res.send('<a href ="/b">Go to B</a>');
// });

// app.get('/b',function(req,res){
//     res.send('<a href="/a">Go to A</a>');
// });

// // /:(값) 여기서 값은 보통 숫자를 받는다. :를 쓰지않으면 문자열로 전송된다. : 로 써야 뒤가 매개변수로 전달된다.
// app.get('/page/:id', function(req,res){
//     var id = req.params.id;
//     res.send(id);
// });

// 전체 선택자는 모든것을 다 받기때문에 가장 아래쪽에 위치해서 적어준다.
// app.all('*',function(req,res){
// })

// 서버 실행
http.createServer(app).listen(8000);
console.log('서버 실행중');