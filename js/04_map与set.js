// Map对象
// map对象保存键值对，任何值（对象或原始值）都可以作为一个键或一个值。传统的objec对象键只能是字符串
const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
// 只有对同一个对象的引用，Map结构才将其视为同一个键。
const map = new Map();

map.set(['a'], 555);
console.log(map.get(['a']));
// 
const map1 = new Map();

const k1 = ['a'];
const k2 = ['a'];

map1.set(k1, 111)
map1.set(k2, 222);
console.log(map1);
console.log(map1.get(k1));
console.log(map1.get(k2));
// k1和k2的值是一样的，但在map中被视为两个键。
// Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
//这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

// 遍历
const map2 = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);

for (let key of map2.keys()) {
    console.log(key);
}
// "F"
// "T"

for (let value of map2.values()) {
    console.log(value);
}
// "no"
// "yes"

for (let item of map2.entries()) {
    console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map2.entries()) {
    console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map2.entries()
for (let [key, value] of map2) {
    console.log(key, value);
}
// "F" "no"
// "T" "yes"

//   map转为数组
const map3 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

[...map3.keys()];
// [1, 2, 3]

[...map3.values()];
// ['one', 'two', 'three']

[...map3.entries()];
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map3];
// [[1,'one'], [2, 'two'], [3, 'three']]

//结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。
const map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
console.log(map0);
const map11 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);
console.log(map11);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map22 = new Map(
    [...map0].map(([k, v]) => [k * 2, '_' + v])
);
console.log(map22);
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}

// WeakMap
