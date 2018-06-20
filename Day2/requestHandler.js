// 모듈 추출
var fs = require('fs');

// path: /, /start 처리
function start(req, res){
    //html 파일 읽기
    fs.readFile('./postRequest.html',function(error,html){
        //응답 (상태코드 : 전달할 데이터 유형(MIME 타입))
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(html);
        res.end();
    });
}

function favicon(req,res){
    // 이미지 파일 읽어서 요청 처리
    fs.readFile('./asdf.png',function(error,image){
        res.writeHead(200,{'Content-Type': 'image/png'});
        res.write(image);
        res.end();
    });
}

function show(req,res){
    //이미지 보여주는 함수.
    fs.readFile('./image/mario.png', function(error,image){
        res.writeHead(200,{'Content-Type':'image/png'});
        res.write(image);
        res.end();
    });
}

function upload(req,res){
    // html 폼에서 업로드 요청 시 호출할 함수
}

module.exports ={
    'start' : start,
    'favicon' : favicon,
    'show' : show,
    'upload' : upload
};