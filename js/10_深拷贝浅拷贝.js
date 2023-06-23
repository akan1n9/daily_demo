// -浅拷贝：拷贝的是对象的指针，修改内容互相影响



// -深拷贝：整个对象拷贝到另一个内存中，修改内容互不影响。
// 乞丐版，最简单的深拷贝：
JSON.parse(JSON.stringify())//在拷贝其他引用类型、拷贝函数、循环引用等情况有缺陷。





function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let newtarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, newtarget)
        for (let key in target) {
            newtarget[key] = clone(target[key], map)
        }
        return newtarget;
    } else {
        return target;
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};
let newtarget = clone(target)
console.log(newtarget);
newtarget.field4.child2.child2 = 2;
console.log(target);
console.log(newtarget);