//1.ES6的set方法 无法去除空对象
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
let newarr = [...new Set(arr)]
// console.log(newarr)
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]


//2.ES5splice方法 无法解决NaN 和空对象
function unique1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
// console.log(unique1(arr));
// [ 1, 'true', true,  15,  false, undefined, null,  NaN, NaN, 'NaN', 0, 'a',  {},  {}]


// 3.创建一个新数组，通过includes、indexOf等数组方法将原数组元素与新数组元素进行比对再push进newarr，或者sort排序之后比较元素前后
function unique2(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res;
}
// console.log(unique2(arr));
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]无法解决空对象
function unique3(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res;
}
// console.log(unique3(arr));
// [ 1, 'true', true,  15,  false, undefined, null,  NaN, NaN, 'NaN', 0, 'a',  {},  {}]无法解决NaN和空对象


// 4.filter 对数组每一项进行回调判断
const fltarr = arr.filter((item, index, arr) => {
    return arr.indexOf(item, 0) === index;
})
// console.log(fltarr);
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {}, {}] 无法解决空对象,只保留了'NaN'


// 5.reduce
function redarr(arr) {
    return arr.reduce((pre, nxt) => pre.includes(nxt) ? pre : [...pre, nxt], [])
}
// console.log(redarr(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}] 无法解决空对象


// 6.MAP
function removeDuplicate(arr) {
    const map = new Map()
    const newArr = []
    arr.forEach(item => {
        if (!map.has(item)) { // has()用于判断map是否包为item的属性值
            map.set(item, true) // 使用set()将item设置到map中，并设置其属性值为true
            newArr.push(item)
        }
    })
    return newArr
}
const result = removeDuplicate(arr)
// console.log(result)
// [1, 'true',true, 15, false, undefined, null,  NaN,'NaN', 0,'a',   {},{}]
