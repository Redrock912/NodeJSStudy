// 객체를 클래스처럼 사용하기
// 생성자 선언
function Person(name, job) {
    this.name = name; // this 는 함수를 호출한 대상을 가리킨다.
    this.job = job;
    this.age = 34;
}

var ronnie = new Person('Ronnie','freelancer',34);
var madison = new Person('Madison','lord', 41);

// console.log(ronnie.name);
// console.log(madison);

// for(var ix =0; ix<10; ++ix)
// {
//     console.log(ix);
// }

for(var key in ronnie){
    console.log(ronnie[key]); // 문자열이기 때문에 이런식으로 넣을 수 있다.
}

console.log(ronnie.test); // undefined js 에서는 null체크시 null 체크와 undefined 체크를 둘다 해주어야한다.
ronnie.test = null;
console.log(ronnie.test); // undefined js 에서는 null체크시 null 체크와 undefined 체크를 둘다 해주어야한다.