


const person = {
    name: 'akaning',
    age: 18
}

const p = {}

Object.defineProperty(p, 'name', {
    get() {
        console.log('name属性被访问');
        return person.name
    },
    set(value) {
        console.log('name属性被修改');
        person.name = value;
    }
})

// p.name

// p.name = 'linuji'

// console.log(person.name);


// https://es6.ruanyifeng.com/#docs/proxy


const person1 = {
    name: '神秘人',
    age: 232
}

const proxy = new Proxy(person1, {
    get(target, key) {
        console.log(`${key}属性被访问`);
        return target[key];
    },
    set(target, key, value) {
        console.log(`${key}属性被修改`);
        return Reflect.set(target,key,value);
    },
    deleteProperty(target, key) {
        console.log(`${key}属性被删除`);
        return true;
    }
})

// proxy.name

// proxy.add = 1

// delete proxy.name

// console.log(proxy);
proxy.aasf = 23;
console.log(proxy);