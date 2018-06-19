function sayHello(){
    //console.log('Hello');
    return 'ㅗ디ㅣㅐ'; // void return 이 아닌 undefined return임으로 선언해주어야한다.
}

var helloVar = sayHello();

console.log(helloVar); // 1. hello 2. undefined -> return을 해주어얗마.

var sayHello2 = () => {
    console.log('Hello');
}

// 윗 식과 동일
// var sayHello2 = function() {
//     console.log('Hello');
// }

sayHello2();