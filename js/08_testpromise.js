for (var i = 0; i < 5; i++) {

  setTimeout(function () {
    console.log(new Date, i);
  }, 1000);
}

console.log(new Date, i);

for (let i = 0; i < 5; i++) {

  setTimeout(function () {
    console.log(new Date, i);
  }, 1000);
}

// test.js

const MyPromise = require('./07_write_promise')
const promise = new MyPromise((resolve, reject) => {
  // 目前这里只处理同步的问题
  resolve('success')
})
// console.log(promise);
function other() {
  return new MyPromise((resolve, reject) => {
    resolve('other')
  })
}
promise.then(value => {
  console.log(1)
  console.log('resolve', value)
  return other()
}).then(value => {
  console.log(2)
  console.log('resolve', value)
})

x = new MyPromise((resolve, reject) => {
  resolve('other')
})

resolvePromise(x, resolve, reject);




//then 方法链式调用识别 Promise 是否返回自己
// test.js

const promise3 = new Promise((resolve, reject) => {
  resolve(100)
})
const p1 = promise3.then(value => {
  console.log(value)
  return p1
})
// 100
// [TypeError: Chaining cycle detected for promise #<Promise>]


// test.js

const MyPromise = require('./07_write_promise')
const promise321321 = new MyPromise((resolve, reject) => {
  resolve('success')
})

// 这个时候将promise定义一个p1，然后返回的时候返回p1这个promise
const p123 = promise321321.then(value => {
  console.log(1)
  console.log('resolve', value)
  return p123
})

// 运行的时候会走reject
p123.then(value => {
  console.log(2)
  console.log('resolve', value)
}, reason => {
  console.log(3)
  console.log(reason.message)
})


// test.js
const MyPromise = require('./07_write_promise')
const promise7 = new MyPromise((resolve, reject) => {
  resolve('succ')
})

promise7.then().then().then(value => console.log(value))

// 打印 succ
const MyPromise = require('./07_write_promise')

const promise8 = new MyPromise((reslove, reject) => {
  reject('err')
})
promise8.then().then().then(value => console.log(value), reason => { console.log(reason); })



