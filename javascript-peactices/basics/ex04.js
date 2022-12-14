/*
변수의 스코프(scope)

1.자바스크립트는 어휘(코드)에서 변수의 범위를 알 수 있다.(정적 스코프, Lexical Scope)
2.자바스크립트는 전역범위가 있다.
3.ES6 이전(<=ES5) 
    -자바와 같은 블록({}) 스코프를 지원하지 않았다.
    -함수 범위를 지원한다.
    -함수 블록 안에서 변수 앞에 var 키워드를 사용하면 함수범위를 가진다.
4.ES6 이후(ES6~ES13)
    -자바와 같은 블록 스코프를 지우너한다.
    -let 키워드를 붙혀서 블록 범위를 가지게 한다.
    -const 키워드는 블록 범위에 있는 상수에 적용한다.
5.결론 
    -const/let 만 사용하고 둘 중 하나를 **반드시**붙일것!(안붙이면 전역변수가 된다!!)
*/
var i=10;
var f= function(){
    var i=20;
    j=100;
    console.log(i);
    i=j-i;
}
f();
console.log(i);
console.log(j);

console.log("====================================");

console.log("===var 키워드는 함수 블록에서만 함수 범위를 만든다.")
if(90+10===100){
    var k=20;
}

console.log(k);

{
    let x=1000;
    x=100;
    //PI=0; []
}

//console.log(x); //nor defind error
//console.log(); //nor defind error
