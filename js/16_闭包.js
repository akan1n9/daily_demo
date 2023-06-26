// 闭包指的是那些引用了另一个函数作用域中变量的函数。

// (1)全局变量
var n = 99;
function f1(){
    console.log(n);
}
f1();//99

// (2)局部变量
function f2(){
    var m = 90;
}
console.log(m);//m is not defined