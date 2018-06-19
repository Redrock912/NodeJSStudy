var a=0.1;
var b =0.2;
//var num3 =num1 + num2;

//console.log("Num: " + num1 + "Num2: " + num2 + "Num3: " + num3);

var boolA = (a+b ==0.3); // 소수점 계산이 엉망이라 false 가 나옴
var boolA = ((a*10+b*10)/10 ==0.3); // 명확하게 소수점 계산이 하고싶으면 뺏다가 다시 해야함.

console.log(boolA)