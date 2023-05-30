const arr = [1, 2, 3, [4, 5], [7, [8, 9]], 10];


//利用ES6数组的flat方法。 
let arr1 = arr.flat(Infinity)
console.log(arr1);

// 利用concat拼接数组，实现一层扁平；
function flat1(arr) {
    let res = [];
    arr.forEach(item => {
        res = res.concat(item)
    });
    return res;
}
console.log(flat1(arr));