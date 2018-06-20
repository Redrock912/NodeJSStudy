// 프로그램 종료시 이벤트 발생
function exitListener(){
    console.log('bye');
};

process.on('exit',exitListener);
process.removeListener('exit',exitListener);

process.on('exit', function(){
    console.log('hiyo');
})

// 오류가 발생했을 시  이벤트 발생
process.on('uncaughtException', function(error){
    console.log('eroor: ' + error);

});


// 2초 간격으로 3번 예외 발생 시킴.
var count =0;
function test(){
    count++;

    if(count > 3 ){
        return;

    }

    //강제로 예외 발생.
    setTimeout(test,2000);
    //error.error.error();
    process.emit('uncaughtException');
};

setTimeout(test,2000);