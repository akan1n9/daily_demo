
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';





class MyPromise {
    constructor(executor) {
        try {
            executor(this.reslove, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    status = PENDING;
    value = null;
    reason = null;
    onFulfilledCallbacks = [];
    onRejectedCallbacks = [];

    reslove = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    };
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }
    };
    then(onFulfilled, onRejected) {
        // 可选参数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        const promise2 = new MyPromise((reslove, reject) => {
            if (this.status === FULFILLED) {
                // console.log('this:', this);
                // 创建一个微任务等待 promise2 完成初始化
                queueMicrotask(() => {
                    try {
                        const x = onFulfilled(this.value);
                        // console.log('x:', x);
                        reslovePromise(promise2, x, reslove, reject)
                    } catch (error) {
                        reject(error)
                    }

                })

            } else if (this.status === REJECTED) {
                // onRejected(this.reason)
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.value);
                        // console.log('x:', x);
                        reslovePromise(promise2, x, reslove, reject)
                    } catch (error) {
                        reject(error)
                    }

                })
            } else if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    // ==== 新增 ====
                    queueMicrotask(() => {
                        try {
                            // 获取成功回调函数的执行结果
                            const x = onFulfilled(this.value);
                            // 传入 resolvePromise 集中处理
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    })
                }
                );
                this.onRejectedCallbacks.push(() => {
                    // ==== 新增 ====
                    queueMicrotask(() => {
                        try {
                            // 获取成功回调函数的执行结果
                            const x = onRejected(this.value);
                            // 传入 resolvePromise 集中处理
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
            }
        })
        // console.log('promise2:', promise2);
        return promise2;
    }
}
function reslovePromise(promise2, x, reslove, reject) {
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    // console.log('respromise2:', promise2);
    if (x instanceof MyPromise) {
        // 执行 x，调用 then 方法，目的是将其状态变为 fulfilled 或者 rejected
        x.then(value => reslove(value), reson => reject(reson))
    } else {
        // console.log('x2:',x);
        reslove(x)
    }
}
module.exports = MyPromise;


