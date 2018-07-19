// module
var fs = require('fs');


var mysqlDB;

// DB 연결 함수.
function connectDB(db) {
    mysqlDB = db;
};

// 요청 처리 함수.
function start(req, res) {
    fs.readFile('./login.html', function(error,data){
        res.type('text/html');
        res.send(data);
        
    })
 }
function showTotalUser(req, res) {
    fs.readFile('./register.html', function(error,data){
        res.type('text/html');
        res.send(data);
    })
 }
function insertUser(req, res) {
    var data = {
        // form 의 바디 객체에서 받아옴, not params
        userid : req.body.id,
        nickname: req.body.nickname,
        password : req.body.password
    }

    // db에 데이터 추가
    mysqlDB.insert(res,data);
 }

function login(req,res){
    var data = {
        userid: req.body.id,

        password: req.body.password
    };

    mysqlDB.login(res,data);
}

// 모듈 내보내기.
module.exports = {
    connectDB : connectDB,
    start : start,
    showTotalUser : showTotalUser,
    insertUser : insertUser,
    login : login
};