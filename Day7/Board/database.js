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

                    // 게시판에서 필요한 정보 -> 유저의 id
                    // 쿠키에 저장
                    res.cookie('userid', data.userid);

                    // 글 쓰는 폼으로 이동, redirect를 사용 시 send는 사용할 수 없다.
                    res.redirect('/board/writing');

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

    mysqlDB.saveContent = function(req,res,data){
        var query = 'insert into board set ?';
        client.query(query,data,function(error,result){
            if(error){
                console.log('save error');
                res.send('save error');
            }else{
                console.log('save complete');
                //res.send('save complete');
                res.redirect('/board');
            }
        })
    };

    // 글 목록
    mysqlDB.showBoard = function(req,res,ejs,html){
        var query = 'select * from board';
        client.query(query,function(error,results){
            if(error){
                console.log('board load fail: ' + error);
                res.send('board load fail: ' + error);
            }else {
                if(results.length>0){
                    console.log('board loaded');
                    res.send(ejs.render(html,{
                        data: results
                    }));
                }else{
                    res.type('text/html');
                    res.send(html);
                }
            }
        });
    }

    mysqlDB.showContent = function(req,res,ejs,html){
        var query = 'select * from board where id = ?';
        // 클릭한 게시글 자체에 id값이 있으므로 그값을 전달한다.
        client.query(query,req.params.id,function(error,results){
            if(error){
                console.log('post ' + req.params.id + ' load failed ' + error);
                res.send('post ' + req.params.id + ' load failed ' + error);
            }else {
                if(results.length>0){
                    console.log('post ' + req.params.id + ' load complete ');
                    res.send(ejs.render(html, {
                        data: results[0]
                    }));
                }
            }
        });
    }

    return mysqlDB;
})();

//
module.exports = mysqlDB;