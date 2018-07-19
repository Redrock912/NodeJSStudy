// module
var mysql = require('mysql');

var client = mysql.createConnection({
    user:'root',
    password:'admin',
    database:'restdb'
});

client.connect();

var mysqlDB= (function(){
    var mysqlDB = {};

    mysqlDB.get = function(respond, id){
        console.log('DB Get requested');

        if(id){
            id = (typeof id ==='string') ? Number(id): id;

            var query = 'select * from userinfo where id=?';

            client.query(query,id,function(error,result,fields){
                if(error){
                    console.log("query GET failed");
                    respond.send("query GET failed");
                }else{
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        } else {
            var query = 'select * from userinfo';

            client.query(query,function(error,result,fields){
                if(error){
                    console.log("query all GET failed" + error);
                    respond.send("query all GET failed" + error);
                }else{
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        }
    };

    mysqlDB.insert = function(respond,data){
        console.log("DB insert requested");

        if(data){
            var query = 'insert into userinfo set ?';
            client.query(query,data,function(error,result,fields){
                if(error){
                    console.log("query insert failed");
                    respond.send("query insert failed");
                }else{
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        }
    }

    mysqlDB.remove = function(respond,id){
        console.log('db delete requested');
        if(id){
            id = (typeof id ==='string') ? Number(id) : id;
            var query = 'delete from userinfo where id = ?';

            client.query(query,id,function(error,result,fields){
                if(error){
                    console.log("query DELETE failed");
                    respond.send("query DELETE failed");
                }else{
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        }else{
            console.log('Id input undetected');
        }
    }

    mysqlDB.update = function(respond,data){
        if(data.id){
            data.id = (typeof data.id === 'string') ? Number(data.id) : data.id;

            var query = 'update userinfo set name = ? , region= ? where id =?';
            client.query(query,[data.name,data.password,data.id],function(error,result,fields){
                if(error){
                    console.log("query UPDATE failed");
                    respond.send("query UPDATE failed");
                }else{
                    console.log('Result : ' + JSON.stringify(result));
                    respond.send(result);
                }
            });
        }
    }

    return mysqlDB;
})();


module.exports = mysqlDB;