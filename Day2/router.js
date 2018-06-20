// 라우트 처리 함수 , path: / /start /show /fabicon.ico 등등
function route(handle,path,req,res){

    // handle 객체 안에 처리 함수가 있는지 확인하고 실행
    if(typeof handle[path] === 'function'){
        handle[path](req,res);
    }
    else{
        //404 not found
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('404 Not Fooound');
        res.end();
    }
}


// 모듈 내보내기.
module.exports.route = route;
