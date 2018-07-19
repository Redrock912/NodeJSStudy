// module
var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'root',
    password: 'admin',
    database: 'userdb'
});

client.connect();

var mysqlDB = (function () {
    var mysqlDB = {};

    mysqlDB.get = function (respond, id) {
        console.log('DB Get requested');

        if (id) {
            id = (typeof id === 'string') ? Number(id) : id;

            var query = 'select * from userinfo where id=?';

            client.query(query, id, function (error, result, fields) {
                if (error) {
                    console.log("query GET failed");
                    respond.send("query GET failed");
                } else {
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        } else {
            var query = 'select * from userinfo';

            client.query(query, function (error, result, fields) {
                if (error) {
                    console.log("query all GET failed" + error);
                    respond.send("query all GET failed" + error);
                } else {
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        }
    };

    mysqlDB.insert = function (respond, data) {
        console.log("DB insert requested: " + data.userid);

        var query = 'select * from userinfo where userid = ?';
        client.query(query, data.userid, function (error, result) {

            if (result.length===0) {
                var query = 'insert into userinfo set ?';
                client.query(query, data, function (error, result, fields) {
                    if (error) {
                        console.log("query insert failed");
                        respond.send("query insert failed");
                    } else {
                        console.log('Result : ' + JSON.stringify(result));
                        respond.send(result);
                    }
                });
            }else {
                console.log('ID has already been taken');
                respond.send('ID has already been taken');
            }
        })
    }

    mysqlDB.remove = function (respond, id) {
        console.log('db delete requested');
        if (id) {
            id = (typeof id === 'string') ? Number(id) : id;
            var query = 'delete from userinfo where id = ?';

            client.query(query, id, function (error, result, fields) {
                if (error) {
                    console.log("query DELETE failed");
                    respond.send("query DELETE failed");
                } else {
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        } else {
            console.log('Id input undetected');
        }
    }

    mysqlDB.update = function (respond, data) {
        if (data.id) {
            data.id = (typeof data.id === 'string') ? Number(data.id) : data.id;

            var query = 'update userinfo set name = ? , region= ? where id =?';
            client.query(query, [data.name, data.password, data.id], function (error, result, fields) {
                if (error) {
                    console.log("query UPDATE failed");
                    respond.send("query UPDATE failed");
                } else {
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        }
    }


    mysqlDB.login = function(respond,data){
        var query = 'select * from userinfo where userid = ? and password = ?';
        client.query(query,[data.userid,data.password],function(error,result,fields){
            if (error) {
                console.log("query search failed");
                respond.send("query serach  failed");
            } else {
                if(result.length>0){
                    console.log("Login Success");
                    respond.send("Login Success");
                }else{
                    console.log("Login failed");
                    respond.send('Login Failed');
                }
            }
        });
    };

    return mysqlDB;
})();


module.exports = mysqlDB;