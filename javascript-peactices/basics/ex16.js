/*
함수: function 타입의 객체
*/

const { prototype } = require("events");

//함수를 생성하는 방법1: 함수 리터럴
console.log("=====함수를 생성하는 방법1==========");
function f1(a,b){
    return a+b;
}
console.log(typeof(f1),f1 instanceof Function, f1(10,20));

//함수를 생성하는 방법2: 함수 리터럴(추천)
console.log("=====함수를 생성하는 방법2==========");

var f2= function(a,b){
    return(a+b);
}

console.log(typeof(f2),f2 instanceof Function, f2(10,20));

//함수를 생성하는 방법3: new 연산자와 함께 Function 내장객체(생성자 함수)를 사용하는 방법
console.log("=====함수를 생성하는 방법3==========");

var f3 = new Function("a","b","return(a+b);");
console.log(typeof(f3),f3 instanceof Function, f3(10,20));

//함수를 생성하는 방법4: 익명(anonymity) 함수

setTimeout(function(){
    console.log('time out!');
}, 1000);

// 익명(anonymous) 함수의 또 다른 예: 한번 만(즉시) 실행하는 함수
console.log("=====익명(anonymity) 함수의 또다른 예==========");

var s=(function(a,b){
   var m= 10;
   return a/m+b/m;
})(10,20);

console.log(s);

//가변 파라미터
//1.가변 파라미터: 자바스클비의 험수는 기본적으로 가변 파라미터를 지원
//  파라미터는 고정되어 있지 않다.
//  에러나지 않는다.
var f4=function(a,b,c){
    console.log(a,b,c);
};
f4(10,20,30,40,50,60);

//2. 예
console.log("=====가변 파라미터 함수 sum()==========");
var sum= function(){
    var s=0;
    
    console.log(arguments instanceof Array,arguments instanceof Object,arguments.length);

    // for(let i = 0; i<arguments.length;i++){
    //     s +=arguments[i];
    // }

    // Error
    // arguments의 _proto_는 Object prototype에 chain이 되어 있기 때문에 오류!!
    // arguments.forEach(function(e)){
    //     s +=e;
    // }

    Array.prototype.forEach.call(arguments, function(e){    s+=e;
    })
    
    return s;
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));

