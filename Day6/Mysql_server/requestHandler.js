// DB 변수.
var mysqlDB;

// DB 연결 함수.
function connectDB(db) {
    mysqlDB = db;
};

// 요청 처리 함수.
function start(req, res) {
    res.redirect('/user');
 }
function showTotalUser(req, res) {
    mysqlDB.get(res);
 }
function showUser(req, res) {
    mysqlDB.get(res,req.params.id);
 }
function insertUser(req, res) {
    var data = {
        // form 의 바디 객체에서 받아옴, not params
        name : req.body.name,
        region : req.body.region
    }

    // db에 데이터 추가
    mysqlDB.insert(res,data);
 }
function updateUser(req, res) {
    // 전달할 데이터 생성
    var data = {
        name : req.body.name,
        region : req.body.region,
        id : req.params.id
    }

    // 데이터 갱신 요청
    mysqlDB.update(res, data);
 }
function removeUser(req, res) {
    mysqlDB.remove(res, req.params.id);
 }

// 모듈 내보내기.
module.exports = {
    connectDB : connectDB,
    start : start,
    showTotalUser : showTotalUser,
    showUser : showUser,
    insertUser : insertUser,
    updateUser : updateUser,
    removeUser : removeUser
};