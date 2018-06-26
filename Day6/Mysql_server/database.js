// 모듈 추출.
var mysql = require('mysql');

// 연결 정보 설정.
var client = mysql.createConnection({
    user : 'root',
    password : 'admin',
    database : 'restdb'
});

// 데이터베이스 연결.
client.connect();

// 데이터 베이스 객체 구현.
var mysqlDB = (function() {

    // 변수 선언.
    var mysqlDB = { };

    // 정보 요청 함수.
    mysqlDB.get = function(res, id) {
        console.log('DB Get Requested');

        if (id) {

            // 변수 가공.
            id = (typeof id === 'string') ? Number(id) : id;

            // 쿼리문.
            var query = 'select * from userinfo where id=?';

            // 쿼리 실행.
            client.query(query , id, function(error, result, fields){
                if (error) {
                    console.log('쿼리 실패 select * from userinfo where id=' + id);
                    res.send('쿼리 실패 select * from userinfo where id=' + id);
                } else {
                    console.log('결과: ' + JSON.stringify(result));
                    res.send(result);
                }
            });

        } else {

            // 쿼리문 작성.
            var query = 'select * from userinfo';

            // 쿼리 실행.
            client.query(query, function(error, result, fields){
                if (error) {
                    console.log('쿼리 실패 select * from userinfo');
                    res.send('쿼리 실패 select * from userinfo');
                } else {
                    console.log('결과: ' + result);
                    res.send(result);
                }
            });
        }
    };

    // 데이터 추가.
    mysqlDB.insert = function(res, data) {
        // 채워보세요.
        console.log('DB Insert Requested');

        if (data) {

            // // 쿼리문.
            // var query = 'insert into userinfo (name, region) values (?,?)';

            // // 쿼리 실행.
            // client.query(query , [data.name, data.region], function(error, result, fields){
            //     if (error) {
            //         console.log('DB 추가 실패' + error);
            //         res.send('DB 추가 실패'+error);
            //     } else {
            //         console.log('DB 추가 완료');
            //         console.log(result);
            //         res.send('DB 추가 완료, ' + result);
            //     }
            // });

            // data를 통째로 넣는 방식
            var query = 'insert into userinfo set ?';
            client.query(query,data, function(error,result,fields){
                if (error) {
                    console.log('DB 추가 실패' + error);
                    res.send('DB 추가 실패'+error);
                } else {
                    console.log('DB 추가 완료');
                    console.log(result);
                    res.send('DB 추가 완료, ' + result);
                }
            });

        }
    }

    mysqlDB.remove = function(res, id){
        if(id){
            console.log('DB delete requested');

            id = (typeof id === 'string') ? Number(id) : id;
            var query =  'delete from userinfo where id =' + id;

            client.query(query, function(error,result){
                if(error){
                    console.log('DB delete error ' + error);
                    res.send('DB delete error ' + error);
                } else {
                    console.log('DB delete result ' + result);
                    res.send('DB delete result ' + result);
                }
            })
        }else {
            console.log('ID input undetected');
        }
    };

    mysqlDB.update = function(res,data){
        if(data.id){
            data.id= (typeof data.id === 'string') ? Number(data.id) : data.id;
            var query = 'update userinfo set name = ?, region = ? where id = ?'; // 값들 사이에 , 를 넣지않으면 syntax 오류
            client.query(query,[data.name,data.region,data.id], function(error,result){
                if(error){
                    console.log('DB update error ' + error);
                    res.send('DB update error ' + error);
                }else {
                    console.log('DB update result ' + result);
                    console.log(result);
                    res.redirect('/user');
                }
            })
        }
    }

    // 객체 반환
    return mysqlDB;
})();

// 모듈 내보내기.
module.exports = mysqlDB;