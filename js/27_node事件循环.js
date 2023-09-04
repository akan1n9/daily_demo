console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

new Promise((resolve) => {
  console.log('promise');
  resolve();
}).then(() => {
  console.log('then');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('end');
/*
start
promise
end
nextTick
setTimeout
immediate
then */
// ps:
// 1.当主线程同步代码执行完毕后才会进入事件循环
// 2.事件循环总共分六个阶段，并且每个阶段都包括哪些回调需要记清楚。
// 3.事件循环中会先执行微任务再执行宏任务。
// 4.微任务会穿插在这六个阶段之间执行，每进入到下个阶段前会清空当前的微任务队列。
// 5.微任务中process.nextTick的优先级最高，会优先执行。
