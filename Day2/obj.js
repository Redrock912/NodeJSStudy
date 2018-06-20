// //객체 생성
// var obj = {
//     name: 'BS',
//     showName: function(){
//         console.log(this.name);
//     },

// }

// // 객체에 있는 함수 호출.
// //obj.showName();
// // 객체에 있는 함수 호출.
// //obj['showName']();

// for(var key in obj){
    
//     //console.log(key + " " +typeof key);
//     //console.log(obj[key] + " " +typeof obj[key]);
//     if(typeof obj[key] === 'function')
//     {
//         obj[key]();
//     }
//     //console.log(typeof(key));
// }

// // console.log(false == 0);
// // console.log(false == '0');
// // console.log(false == undefined);
// // console.log(false == null);
// // console.log(false == '');

// // === 은 타입을 먼저 비교. !== 도 존재
// console.log(false === 0);
// console.log(false === '0');
// console.log(false === undefined);
// console.log(false === null);
// console.log(false === '');

function start(){
    console.log('Start called ');
}

function show(){
    console.log('SHOW');
}

var handler = {
    '/' : start,
    '/start' : start,
    '/show' : show,
}

//
function router(path, Dandler){
    Dandler[path](); //객체에 함수를 넣어놓고 호출
}

//라우터 함수 호출
router('/show',handler);