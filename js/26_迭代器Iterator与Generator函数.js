/* 
Iterator是一种接口，为各种不同的数据结构提供统一的访问机制。
任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator 的遍历过程是这样的。

（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。*/
// 模拟next()方法：
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ?
        { value: array[nextIndex++], done: false } :
        { value: undefined, done: true };
    }
  };
}
// 一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。
// ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”
/*
原生具备 Iterator 接口的数据结构如下。Array、Map、Set、String、TypedArray、函数的 arguments 对象、NodeList 对象
*/
// 使用数组原生的iterator接口：
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }

// 调用 Iterator 接口的场合：
/*
（1）解构赋值
（2）扩展运算符
（3）yield*
（4）其他场合:任何接受数组作为参数的场合。
*/


// Generator 函数
// 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
// 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
// 基本语法：
function* helloWorldGenerator() {
  yield 'hello';//内部使用yield表达式，定义不同的内部状态
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
//这里的hw就是一个迭代器对象
console.log(hw.next());  //{ value: 'hello', done: false }
console.log(hw.next());  //{ value: 'world', done: false }
console.log(hw.next());  //{ value: 'ending', done: true }
console.log(hw.next());  //{ value: undefined, done: true }
// 迭代器对象hw next方法运行逻辑：
//（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
//（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
//（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
//（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
// 需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行
hw.throw(new Error('出错了')) //throw()是将yield表达式替换成一个throw语句
hw.return(2)                  //return()是将yield表达式替换成一个return语句
