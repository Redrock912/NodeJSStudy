// 모듈 추출
var server = require('./server');
var requestHandler = require('./requestHandler');

// 요청 경로별로 실행할 함수 정보를 담고있는 객체
var handle = {
    '/' : requestHandler.start,
    '/start' : requestHandler.start,
    '/upload' : requestHandler.uplaod,
    '/show' : requestHandler.show
};

server.serverStart(handle);