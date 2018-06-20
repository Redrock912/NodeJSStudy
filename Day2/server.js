// 모듈 추출
var http = require('http');

// 서버 생성
function serverStart(route, handle){
    // 요청 처리 함수.
    function onRequest(req,res){

        // 요청 방식 확인
        console.log(req.method);
        
        // 라우팅 처리
        route(handle, req.url, req,res);
    }

    // 서버 객체 생성
    http.createServer(onRequest).listen(8000);

    console.log('서버 실행중');
}

// 모듈 내보내기
module.exports = {
    'serverStart' : serverStart
}