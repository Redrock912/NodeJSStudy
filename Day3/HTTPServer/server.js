//모듈 추출
var http = require('http');

function serverStart(handle, route) {

    //리스너 함수
    function onrequest(req, res) {
        // res.writeHead(200, { 'Content-Type': 'text/plain' }); // 요청하는 타입, html에 한정될 이유는 없다.
        // res.write('ARRRRRR');
        // res.end();
        
        // 요청 경로 추출
        var path = req.url;

        // 라우팅 함수 실행
        route(handle,path,res,req);
    }

    var server = http.createServer();
    server.on('request', onrequest);
    server.on('close', function () {
        console.log('서버종료');
    });

    server.listen(8000);
    console.log('서버 실행중');

};
// 서버 2초후에 종료
// setTimeout(function(){
//     server.close();
// },2000);


module.exports.serverStart = serverStart;