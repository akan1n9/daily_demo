var dynamicFunc = function (callback) {
    setTimeout(function () {
        callback();
    }, 1000);
};

dynamicFunc(function () {
    console.log('qian gu');
});

setTimeout(function () {
    console.log('qiangu1');
    setTimeout(function () {
        console.log('qiangu2');
        setTimeout(function () {
            console.log('qiangu3');
        }, 3000);
    }, 2000);
}, 1000);

let n = 2
let p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(() => {
        console.log('执行完成');
        if (n > 1) {
            resolve('我是成功！！')
        } else {
            reject('失败了！')
        }
    }, 2000);
});
// console.log(p);
// setTimeout(() => { console.log(p) }, 3000)

// p.then((data) => { console.log(data); console.log(p); }, (err) => { console.log(err); console.log(p) })

p.then((data) => { console.log(data); console.log(p); console.log(dsada); }).catch((err) => { console.log(err); console.log(p) })

// all的用法
// 谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise对象
// 当我们有多个异步操作需要处理，并在所有操作完成后获取结果，可以使用all方法
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 成功');
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 成功');
    }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 3 成功');
        reject('Promise 3 失败')
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved'] 三个都成功则成功
    })
    .catch(error => {
        console.error(error); //Promise 3 失败  有一个失败则失败
    });


Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });
/* [
{ status: 'fulfilled', value: 'Promise 1 成功' },
{ status: 'fulfilled', value: 'Promise 2 成功' },
{ status: 'rejected', reason: 'Promise 3 失败' }
]*/

// promise.allSettled:不同于all  Promise.all 将在 Promises 数组中的其中一个 Promises 失败后立即失败。来自es2020
// Promise.allSettled 将永远不会失败，一旦数组中的所有 Promises 被完成或失败，它就会完成。

// promise.any() -es2021 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；
// 如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。




// race的用法：谁跑的快，以谁为准执行回调
// 用于并发操作非常有用
const Promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'Promise 1 成功');
});

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Promise 2 成功');
});

Promise.race([Promise1, Promise2])
    .then(result => {
        console.log(result); // 输出 "Promise 1 resolved"
    })
    .catch(error => {
        console.error(error);
    });

// 静态调用reslove和reject
// 有时需要将现有对象转为 Promise 对象，Promise.resolve()
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

// 参数类型：
// （1）参数是一个 Promise 实例:Promise.resolve将不做任何修改、原封不动地返回这个实例。
// （2）参数是一个thenable对象,thenable对象指的是具有then方法的对象:
/*
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
Promise.resolve()方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then()方法。
 */
let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
    console.log(value);  // 42
});

//（3）参数不是具有then()方法的对象，或根本就不是对象
// 如果参数是一个原始值，或者是一个不具有then()方法的对象，则Promise.resolve()方法返回一个新的 Promise 对象，状态为resolved。
const p2 = Promise.resolve('Hello');
// （4）不带有任何参数:直接返回一个resolved状态的 Promise 对象。
// 所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve()方法。:
// const p = Promise.resolve();
// p.then(function () {
//   // ...
// });

// promise.reject()
// Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
const p5 = Promise.reject('出错了');
// 等同于
const p6 = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
    console.log(s)
});
// 出错了

// promise.try() 模拟try代码块
// 它会立即执行一个函数并返回一个 Promise 对象。这个函数可以是同步的，也可以是异步的，它可以返回一个值或者抛出一个错误。
/*
Promise.try(() => {})
  .then(...)
  .catch(...)


*/
Promise.try(() => {
    // 同步操作
    return 42;
}).then(value => {
    console.log(value); // 输出 42
});

Promise.try(() => {
    // 异步操作
    return new Promise(resolve => {
        setTimeout(() => resolve(100), 1000);
    });
}).then(value => {
    console.log(value); // 输出 100
});

p2.then(function (s) {
    console.log(s)
});
// Hello


// test.js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000);
})

promise.then(value => {
    console.log('resolve', value)
}, reason => {
    console.log('reject', reason)
})





