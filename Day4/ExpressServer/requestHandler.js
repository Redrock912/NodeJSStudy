// 모듈 추출
var fs = require('fs');

function start(req,res){
    
    fs.readFile('./postReq.html',function(error,html){
        res.send(html); // res.send(html.toString()); 문자열로 보내야 한다는데, html만으로도 작동함.
        
    })
    //res.send()
};

function upload(req,res){
    // connect-multiparty 미들웨어 사용해서 업로드 이미지 파싱 처리
    // 업로드된 이미지 설정
    fs.rename(req.files.image.path, './image/show.png', function(error){
        res.send('<img src = "/show" />');
    })
}

function show(req,res){
    fs.readFile('./image/show.png', function(error,image){
        if(error) res.send(error + '\n');
        else res.send(image);
    });
};

module.exports = {
    start : start,
    uplaod : upload,
    show : show
};