// 赋值 、浅拷贝 、 深拷贝
let obj = {
    name: 'lining',
    hoobies: ["basketball", "swim"]
}

// 对象的赋值操作
let obj1 = obj
obj1.name = "LiNing"
obj1.hoobies[1] = "running"

console.log("obj1:", obj1);                 //obj1: { name: 'LiNing', hoobies: [ 'basketball', 'running' ] }
console.log("obj:", obj);                   //obj: { name: 'LiNing', hoobies: [ 'basketball', 'running' ] }

// 浅拷贝
const student = {
    tall: 188,
    language: ["chinese", "english"]
}
const student1 = Object.assign({}, student)
const student2 = { ...student }
student1.tall = 170;
student1.language[0] = "xxxx"

console.log("student:", student);          //student: { tall: 188, language: [ 'xxxx', 'english' ] }
console.log("student1:", student1);        //student1: { tall: 170, language: [ 'xxxx', 'english' ] }
console.log("student2:", student2);        //student2: { tall: 188, language: [ 'xxxx', 'english' ] }
// 可以看到浅拷贝就只是浅浅的拷贝了第一层~ 改变更深层次的数据，彼此之间依然会受到影响
// 来看几个数组浅拷贝的方式
const arr = [
    { name: "lining" },
    "baby", "son", "kaka", "xian"
]

const arr1 = arr.concat()
const arr2 = arr.slice()
const arr3 = Array.from(arr)

arr1[0].name = "LiNing"
arr1[1] = "BABY"

console.log("arr:", arr);                 //arr: [ { name: 'LiNing' }, 'baby', 'son', 'kaka', 'xian' ]
console.log("arr1:", arr1);               //arr1: [ { name: 'LiNing' }, 'BABY', 'son', 'kaka', 'xian' ]
console.log("arr2:", arr2);               //arr2: [ { name: 'LiNing' }, 'baby', 'son', 'kaka', 'xian' ]
console.log("arr3:", arr3);               //arr3: [ { name: 'LiNing' }, 'baby', 'son', 'kaka', 'xian' ]

// 其实当对象型数据只有一层时，浅拷贝就是深拷贝~

// 深拷贝！
// 最简单的深拷贝
const num = {
    name: 'Chen',
    hobby: ['see a film', 'write the code', 'play basketball', 'tourism']
}
// console.log(JSON.stringify(num));
const num1 = JSON.parse(JSON.stringify(num))
num1.hobby[0] = "swim"

console.log("num:", num);
console.log("num1:", num1);
// 原理就是：用JSON.stringify(num)将对象转成字符串，再用JSON.parse()将字符串解析成对象，新的对象产生了，而且对象会开辟新的栈 
// 缺点：
// 1.无法拷贝特殊对象，例如函数、Date()
// 2.无法处理循环引用
// 3.无法拷贝原型链上的属性和方法
// 4.无法拷贝对象中的函数
// 5.性能一般
const deep1 = {
    tall: 178,
    birthday: new Date('2002/07/16'),
    sayHi: function (name) {
        console.log(name);
    },
    hooby: ['ball', 'swim']
}
const deep2 = JSON.parse(JSON.stringify(deep1))

// console.log("JSON deep2:", deep2);
/*JSON deep2: {
    tall: 178,
    birthday: '2002-07-15T16:00:00.000Z',
    hooby: [ 'ball', 'swim' ]
  }*/

const deepClone = function (obj) {
    const newObj = {}
    const keyArr = Object.keys(obj)
    let key = null;
    let value = null;
    for (let i = 0; i < keyArr.length; i++) {
        key = keyArr[i];
        value = obj[key]
        if (value && typeof value === 'object') {
            newObj[key] = deepClone(value)
        } else {
            newObj[key] = value
        }
    }
    return newObj;
}

let deep3 = deepClone(deep1)
// console.log("deep3:", deep3);
/*
deep3: {
  tall: 178,
  birthday: {},
  sayHi: [Function: sayHi],
  hooby: { '0': 'ball', '1': 'swim' }
}
*/
deep3.sayHi("lining");
// 依然存在问题，循环引用
var man = {
    name: 'aepkill',
    sex: 'male'
};
man['deefRef'] = man;

//deepClone(man) //RangeError: Maximum call stack size exceeded 爆栈
// 解决循环引用问题：
const lastdeepClone = function (obj, parent = null) {
    const newObj = {}
    const keyArr = Object.keys(obj)
    let key = null;
    let value = null;
    let _parent = parent;
    while (_parent) {
        if (_parent.originalParent === obj) {
            return _parent.currentParent
        }
        _parent = _parent.parent
    }
    for (let i = 0; i < keyArr.length; i++) {
        key = keyArr[i];
        value = obj[key]
        if (value && typeof value === 'object') {
            newObj[key] = lastdeepClone(value, {
                originalParent: obj,
                currentParent: newObj,
                parent: parent
            })
        } else {
            newObj[key] = value
        }
    }
    return newObj
}
console.log("last:",lastdeepClone(man));


// 使用第三方库lodash里的cloneDeep实现完美深拷贝
const _ = require('lodash')
const deep5 = _.cloneDeep(deep1)
console.log("lodash.deep4:", deep5);