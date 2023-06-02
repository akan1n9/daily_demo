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