// module 
var fs = require('fs');

// db 변수
var mysqlDB;

// db 연결 함수
function connectDB(database) {
    mysqlDB =database;

};

function start(req,res){
    res.redirect('/register');
}

// 사용자 정보 등록하는 웹폼(webform)을 보여주는 함수
function showRegisterForm(req,res) {
    fs.readFile('./register.html',function(error,html){
        res.type('text/html'); // 타입설정하면
        res.send(html); // 바로 보내서 읽을 수 있다. toString x
    });
};
function showLoginForm(req,res) {
    fs.readFile('./login.html',function(error,html){
        res.type('text/html'); // 타입설정하면
        res.send(html); // 바로 보내서 읽을 수 있다. toString x
    });
};
function register(req,res) {
    // data 설정
    var data = {
        userid: req.body.id,
        nickname : req.body.nickname,
        password : req.body.password
    }

    // db 에 데이터 추가 요청
    mysqlDB.insert(res,data);
}
function login(req,res) {
    var data = {
        userid : req.body.id,
        password : req.body.password
    };

    
    mysqlDB.login(res,data);
}


// export module
// module.exports.connectDB = connectDB;
// module.exports.showRegisterForm = showRegisterForm; //get
// module.exports.showLoginForm =showLoginForm; // get
// module.exports.register = register; // post
// module.exports.start = start; 
// module.exports.login = login; //post

module.exports = {
    connectDB : connectDB,
    showLoginForm : showLoginForm,
    showRegisterForm : showRegisterForm,
    register : register,
    start : start,
    login : login,
}

