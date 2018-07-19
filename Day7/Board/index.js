// module
var server = require('./server');
var requestHandler = require('./requestHandler');
var database = require('./database');

// 핸들러 생성자
function HandleCreator(method, path, callback) {
    this.method = method;
    this.path = path;
    this.callback = callback;
}

// 핸들 객체 설정
var handle = [
    // GET
    new HandleCreator('get','/',requestHandler.start),
    new HandleCreator('get','/register',requestHandler.showRegisterForm),
    new HandleCreator('get','/login',requestHandler.showLoginForm),
    new HandleCreator('get','/board',requestHandler.showBoard),
    new HandleCreator('get','/board/writing',requestHandler.showWritingForm),
    new HandleCreator('get','/board/:id',requestHandler.showContent), // 매개변수 받는 핸들이 가장 아래쪽에있어야함 writing 보다 위에 있으면 writing 쪽 핸들러는 작동을 안한다.

    // POST
    new HandleCreator('post','/register',requestHandler.register),
    new HandleCreator('post','/login',requestHandler.login),
    new HandleCreator('post','/board',requestHandler.saveContent),
];

// connect database
requestHandler.connectDB(database);

// start server
server.serverStart(handle);