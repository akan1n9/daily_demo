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

类的每个实例都对应一个唯一的成员对象，所有成员都不会在原型上共享。

#### 原型方法

在类块中定义的方法作为原型方法

```
class Person{
	constructor(){
	//添加到this的所有内容都会存在于不同的实例上
		this.locate=()=>console.log('instance')
	}
	
	//在类块中定义的所有内容都会定义在类的原型上
	locate(){
	  console.log('prototype')
	}
}

let p = new Person{}

p.locate()               //instance
Person.prototype.locate()//prototype
```

但不能在类块中给原型添加原始值或对象作为成员数据,可以在类的外部手动添加：

```
class Person{
	sayName(){
		console.log(`${Person.greeting}`)
	}
}

Person.greeting = 'My name is aka'
```



#### 静态类方法

在类上定义的静态方法通常用于执行不特定实例的操作，也不要求存在类的实例。静态成员每个类上只有一个。

定义静态类成员使用static作为前缀

```
class Person{
	constructor(){
	//添加到this的所有内容都会存在于不同的实例上
		this.locate=()=>console.log('instance'，this)
	}
	
	//在类块中定义的所有内容都会定义在类的原型上
	locate(){
	  console.log('prototype',this)
	}
	
	//定义在类本身上
	static locate(){
	  console.log('class', this)
	}
}

let p = new Person{}

p.locate()               //instance, Person{}
Person.prototype.locate()//prototype, {constructor:...}
Person.locate()          //class, class Person{} 
```

### 继承

使用extends关键字实现继承

使用super关键字引用派生类的原型，仅限于类构造函数、实例方法和静态方法内部。在类构造函数中使用super可以调用父构造函数。

```
class Parent{
	constructor(){
	
	}
}

class Son extends Parent {
	constructor(){
		//不能在调用super()之前使用this
		super()
	}
}
```

如果在派生类中显示定义了构造函数，则要么必须在其中调用super，要么必须返回一个对象。
