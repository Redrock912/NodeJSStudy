// 모듈 추출
var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

// 라우팅 정보 객체

var handle = {
    '/' : requestHandler.start,
    '/start' :  requestHandler.start,
    '/favicon.ico' : requestHandler.favicon,
    '/show' : requestHandler.show,
    '/upload' : requestHandler.upload,
};

// 서버 실행
server.serverStart(router.route, handle);