// 闭包指的是那些引用了另一个函数作用域中变量的函数。

// (1)全局变量
var n = 99;
function f1() {
    console.log(n);
}
f1();//99

// (2)局部变量
function f2() {
    var m = 90;
}
console.log(m);//m is not defined

// 闭包的概念最初在scheme被提出，指函数可捕获其所在作用域的变量
// 本质上是函数和作用域两者的组合，在有些语言，嵌套定义函数并不能让你获取到父函数体的内容
// 反而提供了特殊的语法去创建一个闭包。而在js里，任何函数都可以捕获上级作用域的变量，因此认为它们都是闭包。

function dad() { 
    let o = 90;
    function son(){
        console.log(o);
    }
    return son;
}

let res = dad();
res();