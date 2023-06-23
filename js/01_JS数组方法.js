// 类型相关

Array.isArray(arr);//判断是否为数组
arr.toString();//将数组转化为字符串，可选参数为以何种进制显示数字，不改变原数组
arr.join()//将数组转换为字符串，返回转换后的字符串,可选参数为字符串分隔符，不改变原数组
arr.join('-').split('-')// 字符串的split方法：将字符串按照指定的分隔符，组装为数组，不改变原字符串；
Array.from(arrayLike)//将伪数组转化为真数组
Array.of(2, 3, 4)//创建数组，将一系列值转换成数组

//添加和删除

arr.push()//向数组的最后面插入一个或多个元素，返回结果为新数组的长度,改变原数组
arr.pop()//删除数组中的最后一个元素，返回结果为被删除的元素,改变原数组
arr.unshift()//在数组最前面插入一个或多个元素，返回新数组的长度,改变原数组
arr.shift()//删除数组中的第一个元素，返回结果为被删除的元素,改变原数组

//splice()从数组中删除指定的一个或多个元素，返回结果为被删除元素组成的新数组（会改变原来的数组）

// 新数组 = 原数组.splice(起始索引index);
// 新数组 = 原数组.splice(起始索引index, 需要删除的个数);
// 新数组 = 原数组.splice(起始索引index, 需要删除的个数, 新的元素1, 新的元素2...);

let arr1 = ['a', 'b', 'c', 'd', 'e', 'f']
let res = arr1.splice(1)//从索引值1开始一直删除元素
console.log(arr1);
console.log(res);

let arr2 = ['a', 'b', 'c', 'd', 'e', 'f']
let res1 = arr2.splice(1, 2)//从索引值1开始删除2个元素
console.log(arr2);
console.log(res1);

let arr3 = ['a', 'b', 'c', 'd', 'e', 'f']
let res2 = arr3.splice(arr3.indexOf('c'), 1)//删除指定元素
console.log(arr3);
console.log(res2);

let arr4 = ['a', 'b', 'c', 'd', 'e', 'f']
let res3 = arr4.splice(1, 3, 1, 2, 3, 4)//从索引1开始删三个元素，并从索引1开始追加1，2，3，4
console.log(arr4);
console.log(res3);

//concat()
//连接两个或多个数组，返回结果为新的数组。不会改变原数组。
// 新数组 = 数组1.concat(数组2, 数组3 ...);

const arr5 = [1, 2, 3];
const arr6 = ['a', 'b', 'c'];
const arr7 = ['ln', '信手'];

const result1 = arr5.concat(arr6);
const result2 = arr6.concat(arr5, arr7);

console.log(result1);
console.log(result2);

//slice()
//从数组中提取指定的一个或者多个元素，返回结果为新的数组（不会改变原来的数组）
//新数组 = 原数组.slice(开始位置的索引);
//新数组 = 原数组.slice(开始位置的索引, 结束位置的索引);（左闭右开）

const arr8 = ['a', 'b', 'c', 'd', 'e', 'f'];

const result3 = arr8.slice(); // 不加参数时，则获取所有的元素。相当于数组的整体赋值
const result4 = arr8.slice(2); // 从索引2开始提取，直到末尾
const result5 = arr8.slice(-2); // 提取最后两个元素
const result6 = arr8.slice(2, 4); // 提取从第二个到第四个之间的元素（不包括第四个元素）
const result7 = arr8.slice(4, 2); // 空

//fill()
//用一个固定值填充数组，返回结果为新的数组。会改变原数组。
// 新数组 = 数组.fill(固定值);
// 新数组 = 数组.fill(固定值, 开始位置的索引);
// 新数组 = 数组.fill(固定值, 开始位置的索引, 结束位置的索引);（左闭右开）

console.log(Array(3).fill(1));
console.log([1, 2, 3].fill('a'));
console.log([1, 2, 3, 4, 5].fill('b', 2));
console.log([1, 2, 3, 4, 5].fill('b', 2, 4));

//数组排序

//reverse()
//反转数组，返回结果为反转后的数组（会改变原来的数组）
//反转后的数组 = 数组.reverse();

const arr9 = [1, 2, 3, 4]
let res4 = arr9.reverse();

console.log(arr9);
console.log(res4);

//sort()无参时按照unicode编码排序
let ar1 = ['e', 'b', 'd', 'a', 'f', 'c'];
let re1 = ar1.sort();
//会改变原数组
console.log(ar1);
console.log(re1);

let ar2 = [5, 2, 11, 3, 4, 1];
let re2 = ar2.sort(); // 将数组 ar2 进行排序

console.log(ar2);
console.log(re2);
//自定义排序规则
var ar3 = [5, 2, 11, 3, 4, 1];
var re3 = ar3.sort(function (a, b) {
    return a - b; // 升序排列
    // return b - a; // 降序排列
});
// ES6写法
let re4 = ar3.sort((a, b) => a - b)

console.log(ar3);
console.log(re3);
console.log(re4);

//查找数组的元素

// 元素的索引 = 数组.indexOf(想要查询的元素);
// 元素的索引 = 数组.lastIndexOf(想要查询的元素);

const arr = ['a', 'b', 'c', 'd', 'e', 'd', 'c'];

console.log(arr.indexOf('c'));
console.log(arr.lastIndexOf('d'));

let art = ['1', '2', '3', '4', '5'];
console.log(art.indexOf(2));

// 索引值 = 数组.indexOf(想要查找的元素, [查找的起始位置]);

let str = ['q', 'i', 'a', 'n', 'g', 'u', 'y', 'i', 'h', 'a', 'o'];
result = str.indexOf('a', 3);

console.log(result);

// includes()

// 布尔值 = arr.includes(想要查找的元素, [position]);
const art1 = [11, 12, 13, 14, 15];
console.log(art1.includes(12));
console.log(art1.includes(20));

console.log(art1.includes(11, 1));

// find()
const itemResult = arr.find((currentItem, currentIndex, currentArray) => {
    return true;
});

// 找出第一个满足指定条件的元素并返回
let art2 = [2, 4, 6, 8, 1, 5, 7];
let ret = art2.find((item, index) => {
    return item > 5 && item % 2 !== 0;
})

console.log(ret);

// findIndex()
const indexResult = arr.findIndex((currentItem, currentIndex, currentArray) => {
    return true;
});
// 找出第一个满足指定条件的元素的索引，没找到返回-1
let art3 = [2, 4, 6, 8, 1, 5, 7];
let ret1 = art3.findIndex((item, index) => {
    return item > 5 && item % 2 !== 0;
})

console.log(ret1);

// every()
const boolResult = arr.every((currentItem, currentIndex, currentArray) => {
    return true;
});
// 对数组每一项运行回调函数，全部返回true，every就返回true，否则返回false
let art4 = ['数学', '统计', '统计学', '信科'];
let bool1 = art4.every(function (item, index, array) {
    if (item.length > 2) {
        return false;
    }
    return true;
});
console.log(bool1);

let art5 = ['数学', '统计', '计学', '信科'];
let bool2 = art5.every(function (item, index, array) {
    if (item.length > 2) {
        return false;
    }
    return true;
});
console.log(bool2);

// some()
// 对数组中每一个元素运行回调函数，只要有一个元素返回 true，则停止遍历，此方法返回 true。

// 遍历数组

// for循环
const xh1 = [11, 22, 33, 44, 55]
for (let i = 0; i < xh1.length; i++) {
    console.log(xh1[i]);
}

// forEach()--只支持 IE8 以上的浏览器

let myArr = ['一班', '二班', '三班'];

myArr.forEach((currentItem, currentIndex, currentArray) => {
    console.log('item:' + currentItem);
    console.log('index:' + currentIndex);
    console.log('arr:' + JSON.stringify(currentArray));
    console.log('----------');
});
// forEach() 没有返回值。无法通过newArray = currentArray.forEach()这种方式来接收

// 数组的元素是基本数据类型
let numArr = [1, 2, 3];

numArr.forEach((item) => {
    item = item * 2;
});
console.log(numArr);//没有改变原数组

// 数组的元素是引用数据类型

// 1.直接修改整个元素对象
let objArr = [
    { name: '清华', age: 20 },
    { name: '北大', age: 30 },
];

objArr.forEach((item) => {
    item = {
        name: '南大',
        age: '29',
    };
});
console.log(objArr); //不改变原数组

// 2.修改元素对象里的某个属性
let objArr1 = [
    { name: '壹号', age: 28 },
    { name: '二号', age: 30 },
];

objArr1.forEach((item) => {
    item.name = '三号';
});
console.log(objArr1);

// forEach() 通过参数 2、参数 3 修改原数组

let numArr1 = [1, 2, 3];

numArr1.forEach((item, index, arr) => {
    arr[index] = arr[index] * 2;
});
console.log(numArr1);

let objArr2 = [
    { name: '一', age: 28 },
    { name: '二', age: 34 },
];

objArr2.forEach((item, index, arr) => {
    arr[index] = {
        name: '小明',
        age: '10',
    };
});
console.log(objArr2);

let objArr3 = [
    { name: '小虎', age: 28 },
    { name: '小皮', age: 34 },
];

objArr3.forEach((item, index, arr) => {
    arr[index].name = '小明';
});
console.log(objArr3);

// for of --ES6

for (let value of arr) {
    console.log(value);
}

// 关于for in
// for in 是专门用于遍历对象的。对象的属性是无序的（数组的元素有序），for in循环就是专门用于遍历无序的对象。
for (let key in obj) {
    console.log(key);
    console.log(obj.key);
}

// map()
// 对数组中每一项运行回调函数，返回该函数的结果，组成的新数组（返回的是加工后的新数组）。不会改变原数组。
// ES5
const nrr = arr.map(function (currentItem, currentIndex, currentArray) {
    return newItem;
});

// ES6语法
const nrr1 = arr.map((currentItem, currentIndex, currentArray) => {
    return newItem;
});

const ar4 = [1, 3, 6, 2, 5, 6];
const ar5 = ar4.map(item => {
    return item + 10;
});
console.log(ar5);

const a1 = [
    { name: '西电', loc: '西安' },
    { name: '杭电', loc: '杭州' },
];
const a2 = a1.map(item => item.name);

const a3 = a1.map(item => ({
    myName: item.name,
    myLoc: item.loc,
}));
console.log(a1);
console.log(a2);
console.log(a3);

// map()会不会改变原数组

const mrr = [
    {
        name: "小七",
        age: 22,
    },
    {
        name: "小八",
        age: 23,
    },
];

mrr.map((item) => {
    item.name = "哈哈"; // 修改 item 里的某个属性
    return item;
});
console.log(mrr);//map方法如果是修改整个item的值，则不会改变原数组。但如果是修改 item 里面的某个属性，那就会改变原数组。

// filter()
//对数组中每一项执行回调函数，返回结果为true的项，组成新数组返回，不改变原数组
// 用来对数组进行过滤
const newArr = arr.filter((currentItem, currentIndex, currentArray) => {
    return true;
});

let a4 = [1, 32, 3, 4, 5, 6]
let newa4 = a4.filter(item => item > 4)

console.log(a4);
console.log(newa4);

const a5 = [
    { name: '许嵩', type: '一线' },
    { name: '周杰伦', type: '退居二线' },
    { name: '邓紫棋', type: '一线' },
];
const newa5 = a5.filter((item) => item.type == '一线');

console.log(a5);
console.log(newa5);

//reduce()
// arr.reduce(function (上一次回调函数返回值（必填），当前处理的数组元素（必），当前处理的数组元素的下标（选）) { }, 初始预设值)

const a6 = [1, 3, 4, 5, 6]
a6.reduce((prev, item) => {
    console.log(prev);
    console.log(item);
    console.log('-----------');
    return 101;
}, 0)

// reduce应用
// 求和
const rer = [12, 22, 32, 42];
const sum = rer.reduce((prev, item) => prev + item)
console.log(rer);
console.log(sum);
// 统计次数
function repeatval(arr, val) {
    if (!arr || arr.length == 0) return 0;
    return arr.reduce((prev, item) => {
        prev += item == val ? 1 : 0;
        return prev;
    }, 0)
}
const exp1 = [1, 2, 3, 5, 4, 3, 5, 343, 5, 2, 5]
console.log(repeatval(exp1, 5));
// 求最值
const exp2 = [22, 30, 21, 19, 66];
const maxValue = exp2.reduce((prev, item) => {
    return prev > item ? prev : item;
});

console.log(maxValue); 