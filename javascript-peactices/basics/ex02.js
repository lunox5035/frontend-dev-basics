/*변수와 자료형(Data Type) */

/* 기본타입(Primitive Type) */
console.log("===기본타입(undefined,number,string,boolean)===")
/*변수선언 */
/*-undefind */
var u;//var u=nudefind;와 동일, 선언 정의
console.log(u+":"+typeof(u));

/*-number */
i= 10; //var i=10;
console.log(i+":"+typeof(i));
/*실수와 정수를 구분하지 않는다*/

/*-string */
s= "Hello String";
console.log(s+":"+typeof(s));

/*-boolean */
b=true;
console.log(b+":"+typeof(b));


/*객체타입 */
/*기본타입이 아닌 데이터타입*/

/*
-object
    1. new 생성자함수() 사용하여 생성
        Number() =>objext 타입 객체
        String() =>objext 타입 객체
        Boolean() =>objext 타입 객체
        Object() =>objext 타입 객체
        Arrar() =>objext 타입 객체
        Date() =>objext 타입 객체
        RegExp()=>objext 타입 객체
        Function()=>function 타입 객체 ☆★☆
    2.{} 객체 리터럴,
    3.[] 배열 리터럴
    4.null
*/

console.log("===객체타입(object)============================")
var i2 = new Number(10);
var s2 = new String("Hello World");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();

console.log(i2+":"+typeof(i2)   +":"+(i2 instanceof(Number)));
console.log(s2+":"+typeof(s2)   +":"+(s2 instanceof(String)));
console.log(b2+":"+typeof(b2)   +":"+(b2 instanceof(Boolean)));
console.log(o+":"+typeof(o)     +":"+(o instanceof(Object)));
console.log(a+":"+typeof(a)     +":"+(a instanceof(Array)));
console.log(d+":"+typeof(d)     +":"+(d instanceof(Date)));

console.log();

function f(){}
var f= new f();
console.log(f+":"+typeof(f));

console.log();

var o2 ={};
console.log(o2+":"+typeof(o2)   +":"+(o2 instanceof(Object)));

var a2 =[];
console.log(a2+":"+typeof(a2)   +":"+(a2 instanceof(Array)));

var n =null;
console.log(n+":"+typeof(n));

/*
-function 
    1.function f() {....}
    2.var f = function(){....}★☆★
    3.var f = new Function(....)
*/
console.log("===객체타입(function)==========================")

function f1(a,b){
    return(a+b);
}
console.log("f1:"+typeof(f1));
console.log(f1(10,20));

var f2= function(a,b){
    return(a+b);
}
console.log("f2:"+typeof(f2));
console.log(f2(10,20));

var f3= new Function("a","b", "return a+b");    //가변파라미터
console.log("f3:"+typeof(f3));
console.log(f3(10,20));

//유사객체?

