/*
Array 객체 함수: Array.prototype.
*/
var colors=['red','black'];
var fruits=['apple','mango']

//comcat
console.log("=====concat");
var a1= fruits.concat(colors);
console.log(a1);

//pop,push:stack 지원함수
console.log("=====stack 지원 =====");
var color= colors.pop();
console.log(color,colors);

colors.push('yellow');
console.log(colors);

//join
console.log("=====join=====");
var str = fruits.join(":");
console.log(str);

//reverse
console.log("=====revaerse=====");
console.log(fruits);
fruits.reverse();
console.log(fruits);

//shtft
console.log("=====shift=====");
var numbers1=[1000, 3000, 2000, 5000, 4000, 8000];
var number= numbers1.shift();
console.log(number,numbers1);

//slice
console.log("=====slice=====");
var numbers2 = numbers1.slice(1,3);
console.log(numbers1,numbers2);

//splice1: index에서 count개를 삭제하고 삭제된 요소를 배열에 담아 반환
console.log("=====splice(index, count)=====");
console.log(fruits);
var fruits2=fruits.splice(0,1);
console.log(fruits,fruits2);

//splice2: index에서 count개를 삭제하고 replace로 대체한 후,삭제된 요소를 배열에 담아 반환
console.log("=====splice(index, count, replace)=====");
var a1=[0,1,2,3,4];
var a2=a1.splice(1,3,10);
console.log(a2,a1);

//splice3: removeAt() 처럼 작동
console.log("=====removeAt() 처럼 작동=====");
var a1=[0,1,2,3,4];
a1.splice(2,1);     //a1.remove(2)
console.log(a1);

//splice4: insertAt() 처럼 작동
console.log("=====insertAt() 처럼 작동=====");
var a1=[0,1,2,3,4];
a1.splice(1,0,10);  //a1.insert(1,10)
console.log(a1);
