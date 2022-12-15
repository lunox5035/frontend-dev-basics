/**
 * Function.prototy.apply
 * Function.prototy.call
 * Function.prototy.bind
 */

var myObject={
    v:"bbc02131",
    f:function(){
        console.log(this.v);
    },
    f1: function(param1,param2){
        console.log(param1+" "+this.v+" "+(param2?param2:""));
    }
}

var youobject={
    v:"dooly"
}

myObject.f.apply(youobject);
myObject.f1.call(youobject, "hello");
myObject.f1.call(youobject, "hello","again");

var f2=function(){
    console.log(this.v);
}.bind(youobject);

f2();