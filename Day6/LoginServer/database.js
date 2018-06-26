// module
var mysql = require('mysql');

// DB 연결 정보 설정.
var client = mysql.createConnection({
    user : 'root',
    password : 'admin',
    database : 'userdb'
});

// DB 연결.
client.connect(function(error){
    if (error) {
        console.log('DB 연결 오류: ' + error);
    }
});
// db 쿼리 처리 객체 생성
var mysqlDB = (function(){
    var mysqlDB = {};

    //login
    mysqlDB.login = function(res,data){
        var query = 'select * from userinfo where userid = ? and password = ?';
        client.query(query,[data.userid, data.password],function(error,result){
            if(error){
                console.log('query search failed : ' + error);
                res.send('query search failed : ' + error);
            }else{
                if(result.length>0){
                    console.log('login sucess');
                    res.send('login sucess');
                }else{
                    console.log('login failed');
                    res.send('login failed');
                }
            }
        })
    };

    //register
    mysqlDB.insert = function(res,data){
        // id 중복확인
        var query = 'select * from userinfo where userid =?';
        client.query(query,data.userid,function(error,result){

            // 검색 결과 확인, mysql 모듈의 경우에 result가 없다면 0이 들어온다.
            if(result.length === 0) {
                query = 'insert into userinfo set ?';
                client.query(query,data,function(error){
                    if(error){
                        console.log('Insert failed ' + error);
                        res.send('Insert failed ' + error);
                    }else{
                        console.log('User ' + data.userid + 'inserted');
                        res.send('User ' + data.userid + 'inserted');
                    }
                });
            }else{
                console.log('Id is already taken');
                res.send('Id is already taken');
            }
        });
    };

    return mysqlDB;
})();

//
module.exports = mysqlDB;