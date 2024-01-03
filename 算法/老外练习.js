// fibonacci数列
// 1、1、2、3、5、8、13、21、34、55、89 haah
function fibnocci(n) {
    const nums = [1, 1]
    for (let i = 2; i <= n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2]
    }
    return nums[n]
}
console.log(fibnocci(7));

// isPrime 素数判断
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true

}

console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(19));
console.log(isPrime(49));

function minArr(arr) {
    let min = arr[0];
    for (value of arr) {
        if (value < min) {
            min = value;
        }
    }
    return min;
}

function oushu(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    let ans = n;
    while (ans !== 1) {
        if (ans % 2 !== 0) {
            return false;
        }
        ans = ans / 2;
    }
    return true;
}
// 如果一个数字n是2的幂，那么n与(n-1)的按位与结果总是0 即n & (n-1) === 0，所以重写上述算法
function newisPowerTwo(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));

// 阶乘操作
function factor(n) {
    if (n === 1) {
        return 1;
    }
    return n * factor(n - 1)
}
console.log(factor(3));
console.log(factor(5));
console.log(factor(6));


var { foo: F, bar: B = "123" } = { foo: "aaa", bar: "bbb" }
console.log(F);
console.log(B);
// console.log(foo);
console.log(bar);