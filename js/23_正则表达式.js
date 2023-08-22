// 正则表达式用于定义一些字符串的规则
// 语法：
// 1.使用构造函数创建正则表达式的对象
const exp1 = new RegExp("正则表达式") //参数是字符串

const exp2 = new RegExp("正则表达式", "匹配模式")
// 匹配模式：
/* i忽略大小写。这里的 i 指的是 ignore。
   g 全局匹配模式。这里的 g 指的是 global。
   m 执行多行匹配。
   */


// RegExp = Regular expression。使用typeof检查正则对象，会返回object。

// 创建之后使用reg对象的test()方法判断指定字符串是否符合规则

const demo1 = new RegExp("a") //判断字符串是否含有a
const str1 = "abcdf"
const str2 = "bcdf"

console.log(demo1.test(str1)); //true
console.log(demo1.test(str2)); //false

// 第二个参数
const demo2 = new RegExp("A")
const demo3 = new RegExp("A", "i")

const str3 = "aboy"

console.log(demo2.test(str3)); //false
console.log(demo3.test(str3)); //true

// 2.使用字面量创建正则表达式对象
var 变量 = /正则表达式/;  // 注意，这个语法里没有引号

var 变量 = /正则表达式/匹配模式;  // 注意，这个语法里没有引号

const demo4 = /A/
const demo5 = /A/i
const str4 = "abond"

console.log(demo4.test(str4)); //false
console.log(demo5.test(str4)); //true

// 正则表达式简单语法
const grm1 = /a|b/
console.log(grm1.test("cbte"));
// []也可以表示 或 的意思，最常见的语法
const grm2 = /a[bed]c/             //abc、aec、adc
console.log(grm2.test("daaecgh")); //true
//  [a-z] 任意小写字母 [A-Z]任意大写字母 [A-z]任意字母 [0-9]任意数字

// [^]表示除了
var reg = /[^ab]/; // 规则：字符串中，除了a、b之外，还有没有其他的字符内容？
var str = "acb";

console.log(reg.test(str)); // 打印结果：true

var reg1 = /[^0-9]/;  // 规则：字符串中，除了数字之外，还有没有其他的内容？
var str11 = "1991";
var str22 = "199a1";

console.log(reg1.test(str11)); // 打印结果：false （如果字符串是 纯数字，则返回 false）
console.log(reg1.test(str22)); // 打印结果：true

//  /./ 匹配除换行符（\n、\r）之外的任何单个字符，相等于 [^\n\r]。
//  [\s\S] 匹配所有。\s 是匹配所有空白符，包括换行，\S 非空白符，不包括换行。
//  /\w/  匹配字母、数字、下划线。等价于 [A-Za-z0-9_]
//  *	匹配前面的子表达式零次或多次 等价于{0,}  +:匹配前面的子表达式一次或多次 ?:匹配前面的子表达式零次或一次
// {n} n 是一个非负整数。匹配确定的 n 次。 {n,}至少匹配n 次。 {n,m} 最少匹配 n 次且最多匹配 m 次
// ^ 和 $ 分别指字符串的开始与结束 如果在正则表达式中同时使用`^`和`$`符号，则要求字符串必须完全符合正则表达式。

// RegExp内置的test()和 exec():一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）。
const reg12 = /[0-9]/
console.log(reg12.exec("sda5dsas2ds"));    //[ '5', index: 3, input: 'sda5dsas2ds', groups: undefined ]

const reg13 = /[0-9]/g
console.log(reg13.exec("sda5dsas2ds"));    //[ '5', index: 3, input: 'sda5dsas2ds', groups: undefined ]
console.log(reg13.exec("sda5dsas2ds"));    //[ '2', index: 8, input: 'sda5dsas2ds', groups: undefined ]
console.log(reg13.exec("sda5dsas2ds"));    //null


/* 支持正则表达式的 String 对象的方法：
split()               将字符串拆分成数组
search()              搜索字符串中是否含有指定内容，返回索引 index
match()               根据正则表达式，从一个字符串中将符合条件的内容提取出来
replace()             将字符串中的指定内容，替换为新的内容并返回*/

// split():
const list = "1s1s1s1s"
const listReg = /[A-z]/
console.log(list.split(listReg));  //[ '1', '1', '1', '1', '' ]

// search()     只会查找第一个，即使设置全局匹配也没用。
const strr = "hello abc hello aec afc";
/*
* 搜索字符串中是否含有abc 或 aec 或 afc
*/
let result = strr.search(/a[bef]c/);
console.log(result); // 打印结果：6

// match()
var str = "1a2a3a4a5e6f7A8B9C";

var result1 = str.match(/[a-z]/);   // 找到符合要求的第一个内容，然后返回
var result2 = str.match(/[a-z]/g);  // 设置为“全局匹配”模式，匹配字符串中 所有的小写字母
var result3 = str.match(/[a-z]/gi); // 设置多个匹配模式，匹配字符串中 所有的字母（忽略大小写）

console.log(result1); // 打印结果：[ 'a', index: 1, input: '1a2a3a4a5e6f7A8B9C', groups: undefined ]
console.log(result2); // 打印结果：["a", "a", "a", "a", "e", "f"]
console.log(result3); // 打印结果：["a", "a", "a", "a", "e", "f", "A", "B", "C"]

//replace()方法：替换
var strr2 = "Today is fine day,today is fine day !!!"
console.log(strr2);
console.log(strr2.replace("today", "tomorrow"));  //只能替换第一个today
console.log(strr2.replace(/today/gi, "tomorrow")); //这里用到了正则，且为“全局匹配”模式，才能替换所有的today



// 手机号案例
const phNum = /^1[3-9][0-9]{9}$/
console.log(phNum.test("15955911288"));

// 去掉字符串开头和结尾的空格
const das = "  weq     ".replace(/^\s*|\s*$/, "")
console.log(das);

// ps:全局匹配 g 慎用test()方法
const reg123 = /test/g;
const str123 = '_test_test';

console.log(reg123.test(str123)); // true
console.log(reg123.lastIndex); // 5

console.log(reg123.test(str123)); // true
console.log(reg123.lastIndex); // 10

console.log(reg123.test(str123)); // false
console.log(reg123.lastIndex); // 0
// 全局匹配模式`g`如果用于test()方法会有问题。因为g模式会生成一个`lastindex`参数来存储匹配最后一次的位置。