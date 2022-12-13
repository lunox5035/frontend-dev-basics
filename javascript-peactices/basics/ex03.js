/*null과 undefind */

var myVar1 =undefined;   //명시적으로 undefind 대입
var myVar2;              //암시적으로 undefind 대입
var myVar3=null;        

console.log(myVar1+":"+myVar2+":"+myVar3);
//console.log(myVar4);    // not defind error

//undefind과 null의 등치(equal) 비교
console.log(myVar1 == myVar3); //값비교
console.log(myVar1 === myVar3); //타입비교+값비교

console.log("====================================");

//== : eqiality 값의 동치성, 형변환
console.log('4'== 4);
console.log(false==0);
console.log("abc"==new String('abc'));

console.log(true+10);//11
console.log('abc'+new String('abc'));//'abcabc'
console.log(1+'11');//'111'
console.log('11'+1);//'111'

console.log("====================================");
//=== : idenitity
//   1. 타입의 동일성
//   2. 타입이 같은경우
//      2-1(primitive type) : 값의 동일성
//      2-2(object type)    : 객체의 동일성

console.log('4'=== 4);
console.log(false===0);
console.log("abc"===new String('abc'));
console.log(4===2);
console.log(new String('abc')===new String('abc'));