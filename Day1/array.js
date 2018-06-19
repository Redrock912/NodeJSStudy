// 배열 선언
var arrayA = [1,2,3,4,5];

var length = arrayA.length;
arrayA[length] = length + 1;  // 크기 자체를 늘리는게 가능


// 배열 순회
// for (var ix =0; ix< arrayA.length; ++ix)
// {
//     console.log(arrayA[ix]);
// }

console.log(arrayA["0"]); // 배열은 사실 배열이 아니라 객체다. js에서는 배열이없다.
console.log(arrayA[0]); // 배열 객체의 편한기능, 0을 문자열로 치환해준다. 하지만 배열은 아니기 때문에 배열자체의 속도적인 장점은 없다. 그냥 배열처럼 보일뿐
var arrayB ={
    "0" : 1,
    "1" : 2,
    "2" : 3,
    "3" :4,
    "4" : 5
} // 위 식과 동일


arrayA[100]= 101;  // length 는 항상 마지막 키값
for(var ix in arrayA)
{
    console.log(arrayA[ix]); // 100 추가했을때 구하면 123456101 이출력되지만, 아래식으로 하면 함수가 탐색하면서 새로 생성해서 undefined 덩어리들이 나타난다.
}
// for (var ix =0; ix< arrayA.length; ++ix)
// {
//     console.log(arrayA[ix]);
// }

arrayA = [1,2,3,4,5];
arrayA.splice(arrayA.length-1,1);
for(var ix in arrayA)
{
    console.log(arrayA[ix]); 
}

