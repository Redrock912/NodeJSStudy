// 모듈 추출
var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');
var formidable = require('formidable');

//라우팅때 사용할 객체
var handle = {
    '/': requestHandler.start,
    '/start': requestHandler.start,
    '/upload': requestHandler.upload,
    '/notFound': requestHandler.notFound,
    '/favicon.ico' : requestHandler.favicon,
    '/show' : requestHandler.show
};


// 함수 주입
server.serverStart(handle, router.route);