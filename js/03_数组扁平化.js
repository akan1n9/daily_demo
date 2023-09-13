const arr = [1, 2, 3, [4, 5], [7, [8, 9]], 10]; 
//1.利用ES6数组的flat方法。 
let arr1 = arr.flat(Infinity)
console.log(arr1);

//2.利用concat拼接数组，实现一层扁平；
function flat1(arr) {
    let res = [];
    arr.forEach(item => {
        res = res.concat(item)
    });
    return res;
}
console.log(flat1(arr));

//3.循环数组元素 如果是数组，则递归调用
function flatten(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(flatten(arr));

// 4.考虑用reduce方法简化流程
function flatred(arr) {
    return arr.reduce(function (prev, next) {
        return prev.concat(Array.isArray(next) ? flatred(next) : next)
    }, [])
}
console.log(flatred(arr));


// 5.如果数组元素全是数字，可以尝试用toString方法
function flatstr(arr) {
    return arr.toString().split(',').map(item => +item)
    // 如果不加map方法 得到类似于['1','2','3']这样的数组
}
console.log(flatstr(arr))

// 6.ES6扩展运算符
// 单纯的使用扩展运算符可以进行一层扁平：
console.log([].concat(...[1, [2, 3], [4, [5, 6]]]));
//在此基础进行拓展
function flatkz(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatkz(arr));

