### 类定义

类声明

`class Person {}`

类表达式

`const animal = class{}`

与函数表达式类似，类表达式在它们被求值前不能引用。但是函数声明可以提升，类定义不能提升。

函数受函数作用域限制，类受块作用域限制：

```
{
	function Func1() {}
	class Class1 {}
}
console.log(Func1);//Func1() {}
console.log(Class1);//ReferenceError: ClassDeclaration is not defined
```

### 类构造函数

constructor用于在类定义块内部创建类的构造函数。方法名constructor会告诉解释器在使用new操作符创建类的新实例时，应该调用这个函数。构造函数的定义不是必需的，不定义相当于将其定义为空函数。

#### 实例化

```
class Person{
	constructor () {
	 console.log('person one')
	}
}
let a = new Person()//person one
```

new Person()的操作相当于使用new调用其constructor函数。使用new调用类的构造函数：

(1)在内存中创建一个新对象

(2)新对象内部的[[Prototype]]被赋值为构造函数的prototype属性

(3)构造函数内部的this被赋值给这个新对象即this指向新对象

(4)执行构造函数内的代码

(5)如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

```
class Version{
	constructor () {
	this.color = blue;
	}
}
let a = new Version();
console.log(a.color)//blue
```

