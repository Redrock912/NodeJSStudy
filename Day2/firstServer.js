//http 모듈 임포트, http 모듈은 nodejs에 설치되있음.
var http = require("http"); 
// filesystem 모듈 임포트
var fs = require('fs'); 
// 경로 설정 모듈
var path= require('path');
// url 모듈.
var url = require('url'); 
// 만든 router 모듈
var router = require('./router');

// 응답시 호출할 함수 선언
function onRequest(request,response){
    

    console.log('클라이언트 요청 발생' + request.url);
    console.log('supervisor Test');
    console.log(url.parse(request.url));
    
    //라우팅
    if(request.url=='/')
    {
        // html 파일을 읽어와서 전달.
        var htmlPath = path.join(__dirname, "baseHtml.html");
        //fs.readFile(__dirname + '/baseHtml.html',function(error,html){
        fs.readFile(htmlPath,function(error,html){
            //클라 요청 응답
            // 헤더 및 데이터 설정
            response.writeHead(200,{'Content-Type': 'text/html'}); // 요청하는 타입, html에 한정될 이유는 없다.
            response.write(html);
    
            // 응답 종료
            response.end();

        })

    }
    else if(request.url=='/favicon.ico')
    {
        fs.readFile('./asdf.png', function(error,data){
            
            //클라 요청 응답
            //헤더 및 데이터 설정
            response.writeHead(200,{'Content-Type': 'image/png'}); // 요청하는 타입, html에 한정될 이유는 없다.
            response.write(data);
    
            // 응답 종료
            response.end();
        })
    }
}


// 서버 객체 생성
var server = http.createServer(onRequest);

//8000번 포트 사용.
server.listen(8000);

console.log('서버 사용중');