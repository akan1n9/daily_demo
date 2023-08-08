在es6之前，js语法不支持类的，导致面向对象编程方法无法直接使用，我们通过构造函数以及原型、原型链去模拟类，抽象出对象模板。

而在es6中，class作为一个语法糖结构，显示的支持面向对象编程，实际背后使用的仍然是原型和构造函数的概念。

class受块级作用域限制，并且类定义不像函数声明一样可以提升。

类包含的构造函数constructor，会在new一个类对象实例时，执行这个函数，实例化时constructor里的this就是新实例对象。

constructor里包含一些添加到this的属性和方法，在new实例化时给新实例对象添加属性和方法。

而在类块中定义的所有内容都会定义在类的原型上。举个栗子：

```
class Person{
	constructor(){
		this.sayName = ()=>console.log('实例')
	}
	sayName = ()=>console.log('prototype')
}

let p = new Person()
p.sayName() //实例
Person.prototype.sayName() //prototype
```

其实在es中，class就是一种特殊的函数，typeof返回function。但在我个人看来，在跟es5实现继承对比时，我更愿意把它对应成一个原型对象。

关于类的继承，有一个重要的关键字super，super只能在派生类中使用。

```
constructor(){
		super() //其内部的this指向子类的构造函数
	}
```

在派生类constructor里使用this之前一定要先通过super调用父类构造函数进行初始化，有点类似于call的继承，相当于把父类的constructor执行了，并且让其中的this指向派生类实例对象。然后派生类的构造函数可以进一步访问和修改 this. 

