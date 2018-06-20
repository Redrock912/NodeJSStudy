// 모듈
function addNumber(add){
    add();
}

function add(num1,num2){
    console.log("Kark");
}

function substract(num1,num2){
    return num1-num2;
}

var test = 30;
var ronnie ={ "name":'Ronnie'};
//모듈 내보내기.
module.exports.addNumber = addNumber;
module.exports.substract = substract;
exports.test = test;
exports.ronnie = ronnie;


// // 위랑 같은 말
// module.exports = {
//     "addNumber" : addNumber,
//     "substract" : substract
// }

// 아래식도 가능.
// exports.addNumber = addNumber;
// exports.substract = substract;