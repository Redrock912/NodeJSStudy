// 모듈 추출
var fs = require("fs");
var formidable = require('formidable');

function start(res) {

    fs.readFile('./postReq.html',function(error,html){

        res.writeHead(200, { 'Content-Type': 'text/html' }); // 요청하는 타입, html에 한정될 이유는 없다.
        res.write(html);
    
        // 응답 종료
        res.end();
    
    });
}

function upload(res,req){

    // formidable 모듈 초기화
    var form = new formidable.IncomingForm();

    form.parse(req, function(error,field,files){
        console.log('파싱 완료');

        // 업로드된 이미지 파일 이름 바꾸기.  files는 받을때, 배열로 받기때문에, 그 안의 어느 이름을 썼는지 적어줘야한다. ex) files.image
        fs.rename(files.image.path, './image/test.png', function(error){
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write('<img src ="/show"/>'); // " " 를 넣어줘야한다.
            res.end();
        });
    });
    
    
}

function notFound(res){
    res.writeHead(404, { 'Content-Type': 'text/plain' }); // 요청하는 타입, html에 한정될 이유는 없다.
    res.write('404 Page Not Found');

    // 응답 종료
    res.end();
}

// 파비콘 전달 함수
function favicon(res){
    fs.readFile('./image/mario.png',function(error,image){
        res.writeHead(200, {'Content-Type' : 'image/png'});
        res.write(image);
        res.end();
    });
}

function show(res){
    fs.readFile('./image/test.png', function(error,image){
        res.writeHead(200, {'Content-Type' : 'image/png'});
        res.write(image);
        res.end();
    });
}

module.exports = {
    start : start,
    upload : upload,
    notFound : notFound,
    favicon : favicon,
    show : show
}