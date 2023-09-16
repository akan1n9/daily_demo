#### JS：

##### 改变原数组的方法：

push、pop、unshift、shift、splice、fill、reverse、sort

##### forEach：

没有返回值，只是对元素进行遍历操作。正常操作不改变原数组，涉及引用操作可改变数组

##### for in 与for of：

`for...in`循环用于遍历对象的可枚举属性。它迭代的是对象的键，而不是值。

`for...of`循环用于遍历可迭代对象（如数组、字符串、Set、Map等）。它迭代的是对象的值，而不是键。

##### splice和slice：

splice()从数组中删除指定的一个或多个元素，slice从字符串/数组中截取指定的元素

##### iterator迭代器：

JS迭代器（Iterator）是一种用于遍历数据结构的对象，它定义了一种标准的方式来访问数据结构的元素。

##### 函数预处理阶段：

是在代码执行前，js引擎会对函数进行一些预处理操作，主要有以下方面：

1.函数声明提升：所有的函数声明会被提升到当前作用域的顶部

2.变量声明提升：所有的变量声明会被提升到当前作用域的顶部，但赋值操作不会被提升

3.函数表达式不会被提升，与函数声明不同，只有赋值后才能使用

另外：

关于函数预处理：

1. 产生一个 LexicalEnvironment (JS 词法环境对象) 。
2. 函数的参数加入 LexicalEnvironment 中。
3. 内部声明式函数加入 LexicalEnvironment 中。
4. 内部 var 变量加入 LexicalEnvironment 中。

【注意】：每调用一次，会产生一个 LexicalEnvironment (JS 词法环境对象) 。

##### 函数对象的toString方法：

打印函数时，返回函数的字符串形式，会自动调用函数对象的toString方法，可以重写toString方法。

##### 闭包

闭包就是指闭包函数，就是那些引用了另一个函数作用域中变量的函数。最简单的形式就是嵌套定义函数可以让你拿到父函数体的内容，在js里任何函数都可以捕获上级作用域的变量。

简单来说闭包就是背包，当一个函数被创建并传递或从另一个函数返回时，他会携带一个背包，背包中是函数声明时作用域内所有的变量，任何时候我再使用这个函数，背包也一直存在，里面的变量也存在



#### H5 and CSS：

##### 伪类和伪元素：

- 伪类用于选择元素的特定状态或行为。它们以冒号（:）开头，例如 `:hover`、`:active`、`:first-child` 等。
- 伪元素用于选择元素的特定部分，并将样式应用于该部分，在文档中插入虚构的元素。它们以双冒号（::）开头，例如 `::before`、`::after` 等。

##### css选择器优先级

内联 > ID选择器 > 类选择器 > 标签选择器

选择器优先级算法过程：

假设优先级由四个数来决定：A,B,C,D

1.如果存在内联样式，则A=1

2.B是id选择器出现的次数

3.C的值是类选择器和属性选择器和伪类出现的总次数

4.D是标签选择器和伪元素出现的次数

然后从左向右比较ABCD 位数大就优先，如果四位全部相等，则后面的覆盖前面的。

一些栗子：

```
li                                  /* (0, 0, 0, 1) */
ul li                               /* (0, 0, 0, 2) */
ul ol+li                            /* (0, 0, 0, 3) */
ul ol+li                            /* (0, 0, 0, 3) */
h1 + *[REL=up]                      /* (0, 0, 1, 1) */
ul ol li.red                        /* (0, 0, 1, 3) */
li.red.level                        /* (0, 0, 2, 1) */
a1.a2.a3.a4.a5.a6.a7.a8.a9.a10.a11  /* (0, 0, 11,0) */
#x34y                               /* (0, 1, 0, 0) */
li:first-child h2 .title            /* (0, 0, 2, 2) */
#nav .selected > a:hover            /* (0, 1, 2, 1) */
html body #nav .selected > a:hover  /* (0, 1, 2, 3) */
```

##### 移动端响应式布局

响应式布局=pc端 + 移动端

响应式布局的五种方式：

媒体查询、rem、百分比、vw vh、弹性网格布局（flex grid layout）

##### 盒模型

浏览器默认是标准盒模型：一个盒子元素的总宽度和高度包括了内容区域（content）、内边距（padding）、边框（border）和外边距（margin）。

在标准盒模型中，如果给盒子设置`width`和`height`，实际设置的是`content`内容区域的宽和高。内边距`padding`和边框`border`加上设置的宽高一起决定了盒子的大小。

通过box-sizing:border-box设置为IE盒模型（怪异盒模型）：一个盒子元素的总宽度和高度只包括了内容区域（content）和边框（border），不包括内边距（padding）和外边距（margin）。给怪异盒模型设置宽高实际是给整个盒子设置宽高，内容区域的宽高需要减去border和padding计算得出

##### filter属性

属性`filter`用于对元素的可视效果进行处理。它可以应用各种图形效果，如模糊、颜色转换、亮度调整等等

1. `blur()`：给元素应用模糊效果，值越大越模糊。
2. `brightness()`：调整元素的亮度，值为0到1之间的小数值将使元素变暗，值大于1将使元素变亮。
3. `contrast()`：调整元素的对比度，值为0到1之间的小数值将减少对比度，值大于1将增加对比度。
4. `grayscale()`：将元素转换为灰度图像，值为0到1之间的小数值将减少灰度，值为1将完全转换为灰度。
5. `hue-rotate()`：旋转元素的色相，值为角度值（0到360之间）。

##### flex

通过display：flex指定一个容器为flex布局，所有子元素自动成为flex项目，子元素的float、clear、wertical-align属性将消失。

容器的属性：

1.flex-direction属性决定主轴的方向（即项目的排列方向）。有四个值：

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

2.`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

- `nowrap`（默认）：不换行。
- `wrap`：换行，第一行在上方。
- `wrap-reverse`：换行，第一行在下方。

3.`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

4.`justify-content`属性定义了项目在主轴上的对齐方式。

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

5.`align-items`属性定义项目在交叉轴上如何对齐。

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
- <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="img" style="zoom:33%;" />

6.`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- `stretch`（默认值）：轴线占满整个交叉轴。
- <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="img" style="zoom:33%;" />

项目属性：

1.`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

2.`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

3.`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

4.`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。 浏览器根据这个属性，计算主轴是否有多余空间。 它的默认值为auto，即项目的本来大小。

5.`flex`属性是flex-grow,flex-shrink 和flex-basis 的简写，默认值为0 1 auto。 后两个属性可选

6.`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖属性align-items。 默认值为auto，表示继承父元素的属性，如果没有父元素，则等同于stretch

##### grid

[CSS Grid 网格布局教程 - 阮一峰的网络日志 (ruanyifeng.com)](https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

##### 回流与重绘：

回流：dom元素位置发生变化，导致浏览器需要重新计算元素的几何属性，然后重新布局页面。

重绘：dom元素样式发生变化，但不影响其几何属性，浏览器只需要重新绘制元素的样式，而不需要重新布局页面。

回流比重绘成本高

#### vue

##### 父子间传值

###### props:

```javascript
//Parent.vue
<template>
    <Child :msg="message"><Child/> //通过v-bind将父组件的数据message绑定到子组件的msg属性上
<template/>
//Child.vue
<template>
  <div>
    <h1>子组件收到{{ msg }}<h1/>
  <div/>
<template/>
<script>
import { defineProps } from "vue";
const props = defineProps({
  msg: String,
});       
<script/>                
```

###### emits:

```js
//Child.vue
<template>
  <div>
    <button @click="ctop">emit子传父<button/> //点击按钮触发ctop回调函数
  <div/>
<template/>
<script>
import { defineEmits } from "vue";
const emit = defineEmits(["dadClick"]); //注册一个emit事件，告诉父亲要触发的事件是什么
const ctop = () => {
  // 参数一：事件名，参数二：传给父组件的值
  emit("dadClick", zichuanfu);
};
const zichuanfu = {
  name: "儿子",
  age: 18,
};
<script/>   
//Parent.vue
<template>
    <Child @dadClick="dadjieshou" /> //触发dadClick后走dadjieshou回调
<template/>
<script>
const dadjieshou = (data) => { //这里的data就是 zichuanfu{}
  console.log(data.name)
  console.log(data.age)  
};
<script/> 
```

###### ref/expose:

子组件通过defineExpose暴露想暴露出去的数据和方法

父组件通过ref绑定子组件，在ref.value中可以拿到子组件暴露的方法和数据

```js
//Parent.vue
<template>
  <div style="background-color: blueviolet">
    <button @click="callChild1">调用child1子组件方法ref/expose<button/>
    <p>拿到child1子组件数据 ：{{ refChild1 }}<p/>
  <div/>
  <child ref = "son"><child/>         //通过ref = "son"绑定子组件，获取子组件实例
<template/>
<script>
import { ref } from "vue";

const refChild = ref("父组件初始数据");
const son = ref(null);                //通过模板ref锁定子组件child
const callChild = () => {
  console.log(rte.value);
  son.value.changetxt("使用子组件Child1方法修改后的数据");
  refChild1.value = son.value.txt;
};
<script/>      
    
//Child.vue
<template>
  <div style="background-color: #ac3434">
    <h1>child1子组件数据：{{ txt }}<h1/>
  <div/>
<script>
import { ref } from "vue";
// ref/expose
const txt = ref("子组件初始数据");
const changetxt = (data) => {
  txt.value = data;
};
// 使用expose暴露方法和数据
defineExpose({
	txt,changetxt
})
<script/>   
<template/>
```

expose函数：使用expose函数来控制组件被ref时向外暴露的对象内容，借此来维护组件的封装性。

###### mitt/事件总线

vue3移除组件事件的$on,$off,$once实例方法，导致传统的eventBus通信无法再使用。回顾vue2事件总线：

- 在入口文件main.js中创建vm实例并安装EventBus `Vue.prototype.$bus = this`
- A组件想接受数据，则在A组件中给$bus绑定自定义事件`this.$bus.$on('xxxx',回调函数)`
- B组件提供数据，`this.$bus.$emit('xxxx',数据)`
- 在beforeDestory里面解绑事件：`this.$bus.$off('xxxx')`

vue3中借用第三方库更优雅的实现事件总线：

首先在根目录文件夹下创建mitt.js,引入并调用mitt

```js
//mitt.js
import mitt from 'mitt'
const usemitt = mitt()
export default usemitt
```

然后分别在mitt1和mitt2组件中使用

```vue
//mitt1.vue
<template>
  <div style="background-color: #65d14d">
    <h1>我是mitt1</h1>
    <button @click="toMitt2">向mitt2打个招呼</button>
  </div>
</template>

<script setup>
import mitt from "../util/mitt";
let asx = '来自mitt1的你好'
const toMitt2 = ()=>{
    mitt.emit('Hello',asx)
}
</script>

//mitt2.vue
<template>
  <div style="background-color: #1e8ec6">
    <h1>我是mitt2</h1>
    <h1>展示来自mitt1的数据 ：{{ mittasx }}</h1>
  </div>
</template>

<script setup>
import { ref,onUnmounted } from "vue";
import mitt from "../util/mitt";
const mittasx = ref("暂时没有");
mitt.on("Hello", (data) => {
  //   console.log(data);
  mittasx.value = data;
});

// 销毁事件

onUnmounted(() => {
  mitt.off("Hello", (data) => {
    //   console.log(data);
    mittasx.value = data;
  });
});
</script>
```

对比EventBus，mitt更加轻量化，也更好维护，EventBus是一个完整的vue实例，因此他会维护一个完整的响应式系统。

###### v-model

父组件：

```vue
<template>
  <vmodel2 v-model:msg1="message1" v-model:msg2="message2" />
</template>

<script setup>
import { ref } from "vue";
import vmodel2 from "./vmodel2";

const message1 = ref("雷猴");

const message2 = ref("蟑螂恶霸");
</script>
```

子组件

```vue
<template>
  <div><button @click="changeMsg1">修改msg1</button> {{msg1}}</div>

  <div><button @click="changeMsg2">修改msg2</button> {{msg2}}</div>
</template>

<script setup>
import { ref,defineEmits,defineProps } from 'vue'

// 接收
const props = defineProps({
  msg1: String,
  msg2: String
})

const emit = defineEmits(['update:msg1', 'update:msg2']) //必须用 update:modelValue 这个名字来通知父组件修改值

//emit参数1：通知父组件修改数据的方法名，参数2：要修改的值
function changeMsg1() {
  emit('update:msg1', '鲨鱼辣椒')
}

function changeMsg2() {
  emit('update:msg2', '蝎子莱莱')
}

</script>
```

###### provide/inject(多层传值)

provide在父组件里往下传值

inject在子(后代)组件中往上取值

无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者。

顶层父组件：

```vue
<template>
  <div style="background-color: #bd30d2">
    我是顶层父组件
    <h3>provide的数据:{{ name }},{{ age }}</h3>
    <Zi />
  </div>
</template>

<script setup>
import { ref, provide, readonly } from "vue";
import Zi from "./Zi.vue";
const name = ref("Parent");
const age = ref(50);

provide("name", readonly(name)); //设置readonly让子组件无法直接修改该数据，只能通过传下去的方法修改
provide("age", age);
provide("changeName", (newvalue) => {
  name.value = newvalue;
});

// 假如爷爷和父亲同时提供一个provide，孙子用谁的？
provide("test", "爷爷给的test");
</script>
```

第二层子组件：

```vue
<template>
  <div style="background-color: #95549f">
    我是父下一级子组件
    <Sun />
  </div>
</template>
  
<script setup>
import { provide } from "vue";
import Sun from "./Sun.vue";
// 假如爷爷和父亲同时提供一个provide，孙子用谁的？
provide("test", "爸爸给的test");
</script>
```

第三层孙组件：

```vue
<template>
  <div style="background-color: #88708c">
    <h3>我是子组件下一级孙组件</h3>
    <h3>
      name:{{ name }} , age:{{ age }}, sex:{{ sex }},
      假如爷爷和父亲同时提供一个provide，孙子用谁的？:{{ test }}
    </h3>
    <button @click="change">改变</button>
  </div>
</template>
<script setup>
import { inject } from "vue";
const name = inject("name", "默认值");
const age = inject("age", "默认值");
const changeName = inject("changeName");
const sex = inject("sex", "默认值");    //看能不能找到provide的东西，如果没有，就把默认值赋上
const change = () => {
  changeName("使用provide传来的方法改变readonly");
  age.value = 20;
  console.log(name, age);
};
// 假如爷爷和父亲同时提供一个provide，孙子用谁的？
const test = inject("test", "我用谁的");
</script>
```

###### attrs(透穿)

attrs：访问所有父组件传递的飞=非props声明的属性

父组件：

```vue
<template>
  <div style="background-color: #b9d026">
    <h1>attrsParent</h1>
    <button @click="parentFun">调用自身parentFun</button>
    <attrs-child
      v-on:parentFun="parentFun"
      :msg1="msg1"
      :msg2="msg2"
      title="333"
      :parFunction="sayHello"
    />
  </div>
</template>

<script setup>
import attrsChild from "./attrsChild.vue";
import { ref } from "vue";
const msg1 = ref("用props接受");
const msg2 = ref("不用props接受");
const parentFun = () => {
  alert("Hello");
};

const sayHello = () => {
  alert("props,hello");
};
</script>
```

子组件：

```vue
<template>
  <div style="background-color: #93db0d">
    {{ msg1 }}, {{ attrs.msg2 }}, {{ attrs.title }}
  </div>
  <button @click="attrs.onParentFun">看看attrs里面的onParentFun</button>
  <button @click="parFunction">看看props里面的parFunction</button>
</template>

<script setup>
import { useAttrs } from "vue";

defineProps({
  msg1: String,
  parFunction: Function,
});

// attrs：包含父作用域里除 class 和 style 除外的非 props 属性集合
// “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器
const attrs = useAttrs();
console.log(attrs); //{msg2: '不用props接受', title: '333', __vInternal: 1, onParentFun: ƒ}
</script>
```

###### 插槽slot

插槽主要用于父组件向子组件插入html模板片段，子组件暴露slot元素作为内容的出口

默认插槽：

父组件

```vue
<template >
  <div class="parent">
    <h1>这里是slot父组件</h1>
    <child-slot>
        以下内容填充到子组件的slot元素中
      <img src="../../assets/12212.jpg" alt="" />
    </child-slot>
  </div>
</template>
```

子组件：

```vue
<template>
  <div class="child">
    <h2>这是slot子组件</h2>
    <slot>没传值时slot默认值</slot>
  </div>
</template>
```

具名插槽：

父组件：

```vue
<template >
  <div class="parent">
    <h1>这里是slot父组件</h1>
    <child-2-slot>
      <template v-slot:center> //插入下方name="center"的位置
        <img src="../../assets/213213.jpg" alt="" />
      </template>
      <template v-slot:footer>//插入下方name="footer"的位置
        <h4>尝试具名插槽，这里是footer</h4>
      </template>
    </child-2-slot>
  </div>
</template>
```

子组件:

```vue
<template>
  <div class="child">
    <h3>这是具名插槽子组件</h3>
    <slot name="center">1</slot>
    <slot name="footer">2</slot>
  </div>
</template>
```



##### 双向绑定



一句话:数据驱动视图。

在vue中通过指令(v-model)将数据属性绑定到视图元素上，数据变化，视图会自动更新；视图的值变化，数据也会更新；

具体实现：

1. Vue使用了一个名为“Observer”的观察者对象来监听数据的变化。当数据发生变化时，观察者会通知所有相关的订阅者。
2. 在Vue的编译过程中，会对模板进行解析，将模板中的指令和表达式转换为对应的渲染函数。
3. 在渲染函数中，会将数据属性和视图元素进行绑定。当数据属性发生变化时，会触发观察者的更新方法，进而通知所有相关的订阅者进行更新。
4. 当视图元素的值发生变化时，会触发相应的事件，通过事件处理函数将新的值更新到数据属性上。

##### 生命周期

vue3中beforecreate和created被setup方法本身所替代，我们在在setup中将会访问到9个生命周期：

- onBeforeMount：在挂载之前被调用，渲染函数render首次被调用
  - 当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。

- onMounted：注册一个回调函数，在组件挂载完成后执行

- onBeforeUpdate：注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。

  这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。

- onUpdated：注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。

  不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！

- onBeforeUnmount：在卸载组件实例之前调用，此阶段的实例依旧是正常的，仍然保有全部的功能。

- onUnmounted：注册一个回调函数，在组件实例被卸载之后调用。

  可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接。

- onActivated：被keep-alive缓存的组件激活时调用

- onDeactivated：被keep-alive缓存的组件停用时调用

- onErrorCaptured：当捕获一个来自子孙组件的错误时被调用，有三个参数：错误对象、发生错误的组件实例、一个包含错误来源信息的字符串；此钩子会返回false来阻止改错误继续向上传播。

##### ref

vue中的ref有两种用途，vue3中ref可以用来创建响应式数据，对于对象类型的响应式数据，用reactive。

另一种特殊的用法，就是延用vue2中的ref用法，用来获取一个vue组件实例，使用方法就是在父组件中声明一个null的ref对象，绑定到子组件的ref属性上，就可以获取子组件实例。

#### others：

##### 浏览器缓存：

浏览器缓存是指浏览器在第一次请求资源时将资源保存到本地，以便在后续请求中直接从本地加载资源，提高网页加载速度和减轻服务器负担。浏览器缓存分为强制缓存和协商缓存两种方式。

- 强制缓存：浏览器在第一次请求资源时，服务器返回的响应头中包含了缓存策略，比如Cache-Control（设置一些缓存选项）或Expires（过期时间，如果设置了时间，则浏览器会在设置的时间内直接读取缓存，不再请求）等。浏览器会根据这些策略判断是否将资源缓存到本地。如果资源被强制缓存，浏览器在下一次请求该资源时，会直接从本地缓存中加载，不会发送请求到服务器。
- 协商缓存：当资源没有被强制缓存时，浏览器会向服务器发送请求，服务器会判断资源是否发生了变化。如果资源没有变化，服务器会返回一个304 Not Modified的响应，告诉浏览器可以使用本地缓存。浏览器收到这个响应后，会从本地缓存加载资源。如果资源发生了变化，服务器会返回新的资源，并且在响应头中包含新的缓存策略，浏览器会根据新的策略更新本地缓存。

强制缓存和协商缓存可以一起使用，强制缓存优先级高于协商缓存。如果资源被强制缓存，浏览器不会发送请求到服务器，也不会进行协商缓存的判断。只有当资源没有被强制缓存或者强制缓存已过期时，浏览器才会发送请求到服务器进行协商缓存的判断。这样可以减少不必要的请求，提高网页加载速度。

##### cookie，localStorage、sessionStorage：

是三种用于在浏览器中存储数据的技术。

- cookie：Cookie是一小段文本信息，由服务器发送到用户的浏览器并存储在用户的计算机上。它可以在浏览器和服务器之间进行数据交换，用于跟踪用户会话、存储用户偏好设置等。Cookie具有一定的存储容量限制（通常为4KB），并且可以设置过期时间。每次用户请求同一网站时，浏览器都会将相应的Cookie发送给服务器。
- localStorage：localStorage是HTML5提供的一种在浏览器中存储数据的机制。它允许开发者存储和检索大量数据，并且数据在页面关闭后仍然存在。localStorage的存储容量通常较大（通常为5MB或更大），并且可以通过JavaScript API进行读取和写入操作。localStorage的数据存储在客户端，不会被发送到服务器。
- sessionStorage：sessionStorage也是HTML5提供的一种在浏览器中存储数据的机制，类似于localStorage。与localStorage不同的是，sessionStorage中存储的数据仅在当前会话期间有效。当用户关闭浏览器窗口或标签页时，sessionStorage中的数据将被清除。sessionStorage的使用方式与localStorage相似，通过JavaScript API进行读取和写入操作。应用：拆分多个子页面表单，例如投简历

##### Node事件循环

事件循环机制用于:管理异步API的回调函数什么时候回到主线程中执行。

Node.js采用的是异步IO模型。同步API在主线程中执行，异步API在底层的C++维护的线程中执行，异步API的回调函数也会在主线程中执行。

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1f9adf781ca401aacba981fd7c2bf7b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="img"  />



- `Timers`：用于存储定时器的回调函数(setlnterval,setTimeout)。
- `Pending callbacks`：执行与操作系统相关的回调函数，比如启动服务器端应用时监听端口操作的回调函数就在这里调用。
- `idle，prepare`：系统内部使用。(这个我们程序员不用管)
- `Poll`：存储I/O操作的回调函数队列，比如文件读写操作的回调函数。
- `Check`：存储setlmmediate的回调函数。
- `Closingcallbacks`：执行与关闭事件相关的回调，例如关闭数据库连接的回调函数等。

记住以下几点：

1.当主线程同步代码执行完毕后才会进入事件循环

2.事件循环总共分六个阶段，并且每个阶段都包括哪些回调需要记清楚。

3.事件循环中会先执行微任务再执行宏任务。

4.微任务会穿插在这六个阶段之间执行，每进入到下个阶段前会清空当前的微任务队列。

5.微任务中process.nextTick的优先级最高，会优先执行。

##### 跨域

##### 前端SEO优化

1. 合理的html结构：正确的标签，语义化
2. 清晰的URL结构
3. 优化页面加载速度：优化代码，压缩文件，减少http请求
4. 响应式设计
5. 内部链接优化
6. 图片优化：合适的图片格式，压缩图片大小，添加描述性的alt标签
7. 合理的meta标签，使用meta标签提供网页的描述，关键字和其他元数据
8. 合理安排重要内容的位置，引擎抓取顺序是从上到下

##### 浏览器渲染流程：

从服务端获取HTML代码，将其解析成DOM树

将css代码解析成cssom（css对象模型），cssom表示网页的样式

浏览器将dom树和cssom合并，构建渲染树（Render Tree），其中很重要的一步：去除不可见元素，只显示可见元素

Layout(布局)： 根据Render Tree的结构和样式信息进行布局，得到节点的几何信息。

Painting(绘制)：使用计算好的布局信息，讲Render Tree中的元素绘制到屏幕上

JavaScript：在渲染过程中遇到js代码，停止渲染，执行js代码

重绘与重排

##### 服务端渲染SSR

简单来说就是在服务器上生成HTML内容，并将其发送到客户端呈现。传统的客户端渲染是在浏览器上使用JavaScript生成和操作dom

##### token/session

Token是一种用于身份验证和授权的令牌。它是服务器颁发给客户端的一串字符串，用于标识客户端的身份和权限。客户端在每次请求服务器资源时，都需要携带有效的token，以便服务器验证客户端的身份和权限。

Session是一种在服务器端存储用户信息的机制。当用户首次访问服务器时，服务器会为该用户创建一个唯一的session，并将session的标识信息（通常是一个session ID）发送给客户端。客户端在后续的请求中会携带该session ID，服务器通过该ID来查找对应的session，并获取相关用户信息。

区别：

Session是存放在服务器端的，Token是放在客户端存储的

##### indexedDB

用于在客户端存储大量的结构化数据

