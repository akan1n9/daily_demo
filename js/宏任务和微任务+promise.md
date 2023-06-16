# 宏任务和微任务

js 是一种单线程语言，简单的说就是：只有一条通道，那么在任务多的情况下，就会出现拥挤的情况，这种情况下就产生了 ‘多线程’ ，但是这种“多线程”是通过单线程模仿的，也就是假的。那么就产生了同步任务和异步任务。

|         s          |                     宏任务（macrotask）                      |                     微任务（microtask）                      |
| :----------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|      谁发起的      |                     宿主（Node、浏览器）                     |                            JS引擎                            |
|      具体事件      | \1. script (可以理解为外层同步代码)2. setTimeout/setInterval3. UI rendering/UI事件4. postMessage，MessageChannel5. setImmediate，I/O（Node.js） | \1. Promise2. MutaionObserver3. Object.observe（已废弃；Proxy 对象替代）4. process.nextTick（Node.js） |
|      谁先运行      |                            后运行                            |                            先运行                            |
| 会触发新一轮Tick吗 |                              会                              |                             不会                             |

#### 宏任务：

1. script (可以理解为外层同步代码)

2. setTimeout/setInterval
3. UI rendering/UI事件
4. postMessage，MessageChannel
5.  setImmediate，I/O（Node.js）

#### 微任务：

1. Promise
2. process.nextTick（Node.js）
3. Object.observe（已废弃；Proxy 对象替代）
4. MutaionObserver

#### 执行顺序：

先执行同步代码，遇到异步宏任务则将异步宏任务放入宏任务队列中，遇到异步微任务则将异步微任务放入微任务队列中，当所有同步代码执行完毕后，再将异步微任务从队列中调入主线程执行，微任务执行完毕后再将异步宏任务从队列中调入主线程执行，一直循环直至所有任务执行完毕。

<u>*这里容易产生一个错误的认识：就是微任务先于宏任务执行。实际上是先执行同步任务，异步任务有宏任务和微任务两种，先将宏任务添加到宏任务队列中，将宏任务里面的微任务添加到微任务队列中。所有同步执行完之后执行异步，再将异步微任务从队列中调入主线程执行，微任务执行完毕后再将异步宏任务从队列中调入主线程执行。之后就一直循环...*</u>

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021070213542153.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L05hbmN5Rnlu,size_16,color_FFFFFF,t_70)

### 总结：

整个script可以看成一个宏任务（外部同步代码）执行里面的同步代码，遇到宏任务，放到将要执行的宏任务队列，遇到微任务放到script产生的微任务队列里，执行完scrpt里面的同步代码，再去执行微任务队列，相当于这个微任务队列都是scrpt这个宏任务的一部分，执行完了才能继续执行其他宏任务



### 知识点总结

1.Promise的状态已经改变就不能再变

2..then和.catch都会返回一个新的Promise。

3.catch不管被连接到哪里，都能捕获上层未捕捉过的错误

4.在Promise中，返回任意一个非promise的值都会被包裹成promise对象，例如return 2会被包装诚return Promise.reslove（2）

5.Promise 的 .then 或者 .catch 可以被调用多次, 但如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值。

6..then或者.catch中return一个error对象并不会抛出错误。不会被后续的.catch捕获。

7..then或.catch的返回值不能是promise本身，否则会造成死循环

8..then或.catch期望的参数是函数，传入非函数会发生值穿透

9..then方法可以接收两个参数，第一个是处理成功的函数，第二个是处理失败的函数，在某些时候你可以认为.catch是.then第二个参数的简便写法。

10..finally方法也返回一个Promise，他在Promise结束的时候，无论结果为resloved还是rejected，都会执行里面的回调函数

11..all（）的作用是接收一组异步任务，然后并行执行异步任务，并在所有异步操作执行完后才执行回调。

12..race（）的作用也是接受一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。

13.如果在async函数中抛出了错误，则终止错误结果，不会继续向下执行。

14.await后面的promise如果没有返回值，那么await后面的所有内容不会执行，大部分时候await可以看成.then
