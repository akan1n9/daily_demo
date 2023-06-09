// typeof：能判断所有值类型，函数。不可对null、对象、数组进行精确判断，因为都返回object。
console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof Symbol("foo")); // symbol
console.log(typeof 2172141653n); // bigint
console.log(typeof function () { }); // function
// 不能判别
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object

// instance of：能判断对象类型，不能判断基本数据类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。
class People { }
class Student extends People { }

const vortesnail = new Student();

console.log(vortesnail instanceof People); // true
console.log(vortesnail instanceof Student); // true

// Object.prototype.toString.call():所有原始数据类型都能判断，还有Error对象，Date等。
Object.prototype.toString.call(2); // "[object Number]"
Object.prototype.toString.call(""); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(Math); // "[object Math]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(function () { }); // "[object Function]"

// 如何判断变量是否为数组？
const arr = [1, 33, 4];
console.log(Array.isArray(arr));
console.log(arr.__proto__ === Array.prototype);
console.log(arr instanceof Array);
console.log(Object.prototype.toString.call(arr));//[object Array]

