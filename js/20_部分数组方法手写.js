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
Array.prototype.myFilter = function (callback, thisarr) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    if (this == undefined) {
        throw new TypeError('this is null or undefined')
    }
    const o = Object(this)
    const res = []
    for (let i = 0; i < o.length; i++) {
        if (i in o) {
            if (callback.call(thisarr, o[i], i, o)) {
                res.push(o[i])
            }
        }
    }
    return res;
}
console.log(a4.myFilter(item => item < 5));


// map
// 对数组每一项执行回调函数,返回新元素数组
Array.prototype.myMap = function (callback, thisarr) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    if (this == undefined) {
        throw new TypeError('this is null or undefined')
    }
    const o = Object(this)
    const res = []
    for (let i = 0; i < o.length; i++) {
        if (i in o) {
            res[i] = callback.call(thisarr,o[i],i,o)
        }
    }
    return res;
}

