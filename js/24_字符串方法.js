// 1.获取字符串长度
const str = "abcde"
console.log(str.length);

// 2.获取字符串指定位置的值 charAt()/charCodeAt()
const str1 = "hello"
console.log(str1.charAt(1));                               // e
console.log(str1.charCodeAt(1));                           // 101 获取指定位置字符的Unicode值

console.log(str1[5]);                                      // undefined
console.log(str1.charAt(5));                               // ''

// 3.检索字符串是否包含特定序列 下列方法都对大小写敏感 indexOf lastIndexOf includes startsWith endsWith
const str2 = "abcdefgabc"

console.log(str2.indexOf("a"));                            // 0
console.log(str2.indexOf("z"));                            // -1
console.log(str2.indexOf("c", 4));                         // 9 第二个参数为开始检索的位置

//lastIndexOf() 返回最后一次匹配到的位置
console.log(str2.lastIndexOf("a"));                        //7
console.log(str2.lastIndexOf("z"));                        //-1

console.log(str2.includes("a"));                           //true
console.log(str2.includes("z"));                           //false
console.log(str2.includes("e", 5));                        //false 

// startsWith/endsWith
const str3 = "Hello world!"

console.log(str3.startsWith("Hello"));                     //true
console.log(str3.startsWith("Helle"));                     //false
console.log(str3.startsWith("wo", 6));                     //true

console.log(str3.endsWith("!"));                           //true
console.log(str3.endsWith("llo"));                         //false
console.log(str3.endsWith("llo", 5));                      //true 第二个参数为所检索字符串的长度 默认为原始字符串的长度

// 4.连接多个字符串 concat() 不会改变原字符串
const str4 = "abc"
console.log(str4.concat("efg"));
console.log(str4.concat("efg", "hij", "qbz"));
// 开发中使用 + 更加简单
console.log(str4 + "efg");
console.log(str4 + "efg" + "hij" + "qbz");

// 5.字符串分割成数组 split() 不会改变原字符串
// str.split(sep,limit) sep:必选 字符串或正则表达式 从该参数指定的地方分割str limit:可选 指定返回数组的最大长度
const str5 = "abcdef"

console.log(str5.split("c"));                             //[ 'ab', 'def' ]
console.log(str5.split(" "));                             //[ 'abcdef' ]
console.log(str5.split(""));                              //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(str5.split("", 4));                           //[ 'a', 'b', 'c', 'd' ]

//  结合正则表达式
const list = "apples,bananas;cherries"
const fruits = list.split(/[,;]/)
console.log(fruits);                                      //[ 'apples', 'bananas', 'cherries' ]

// 6.截取字符串  substr() substring() slice()
let str6 = "abcdefg"
// slice(start,end)截取的子串下标区间“包左不包右”
console.log(str6.slice(1, 6));
console.log(str6);                            //bcdef   从1截到6
console.log(str6.slice(1));                               //bcdefg  从1截到尾
console.log(str6.slice());                                //abcdefg
console.log(str6.slice(-2));                              //fg      截倒数两个字符
console.log(str6.slice(6, 1));                            //""

// substr(start,length)
// substr已快废弃 mdn推荐用substring代替
const str7 = "abcdefgh"
console.log(str7.substr(1, 6));                           // bcdefg 从1截6个
console.log(str7.substr(1));                              // bcdefgh从1截到尾
console.log(str7.substr());                               // abcdefgh从0截到尾
console.log(str7.substr(-1));                             // h    截倒数一个字符

// substring(from,to)    提取介于from 和 to之间的字符 如果from比to大 先交换位置  如果参数为负数 返回字符串
const str8 = "abcdefgg"
console.log(str8.substring(1, 6));                        // bcdef [1,6)
console.log(str8.substring(1));                           // bcdefgg [1,str.length-1]
console.log(str8.substring());                            // abcdefgg[0,str.length-1]
console.log(str8.substring(6, 1));                        // bcdef [1,6)
console.log(str8.substring(-1));                          // abcdefgg 

// 7.大小写转换  toLowerCase()/toUpperCase()
let str9 = "adABDndj"
console.log(str9.toLowerCase());                          //adabdndj
console.log(str9.toUpperCase());                          //ADABDNDJ
console.log(str9);                      

let word = "apple"
word = word[0].toUpperCase() + word.substr(1)
console.log(word);                                        //Apple

// 8.字符串模式匹配  replace() match() search() 传入字符串的话 会先通过内置构造函数生成正则表达式对象

let str10 = "abcdefa"
console.log(str10.replace("a", "z"));    
console.log(str10);                 //zbcdefa

let str11 = "Mr Blue has a blue house and a blue car";
str11.replace(/blue/gi, "red");                           // 输出结果：'Mr red has a red house and a red car'

// string.match(regexp)
const str12 = "abcdef"
console.log(str12.match("c"));                            //[ 'c', index: 2, input: 'abcdef', groups: undefined ]
console.log(str12.match(/a/));                            //[ 'a', index: 0, input: 'abcdef', groups: undefined ]

// search(regexp)  返回str中第一个与regexp相匹配的子串的起始位置
const str13 = "abcdef"
console.log(str13.search("bcd"));                         //1
console.log(str13.search(/cde/));                         //2

// 9. 移除字符串收尾空白符  不会改变原字符串
let str14 = "  abcdef  "
str14.trim()                                              //"abcdef"          注意，该方法不适用于null、undefined、Number类型。

const s = '  abc  ';
s.trimStart()                                             // "abc  "

const r = '  abc  ';
r.trimEnd()                                               // "  abc"

// 10. 获取字符串本身
// valueOf()和toString()方法都会返回字符串本身的值，用处不大。

let str15 = "abcdef"
console.log(str15.valueOf())                                // "abcdef"

let str16 = "abcdef"
console.log(str16.toString())                               // "abcdef"

// 11. 重复一个字符串 repeat() 方法返回一个新字符串，表示将原字符串重复n次

console.log("x".repeat(3));                                 // "xxx"
console.log("ha".repeat(4));                                // "hahahaha"
console.log("ha".repeat(0));                                // "" 
console.log("ha".repeat(2.9));                              //"haha" 小数会向下取整
console.log("ha".repeat(Infinity));                         //负数和Infinity会报错
console.log("ha".repeat(-1));
console.log("ha".repeat(-0.8));                             //""  0到-1之间的小数取整为-0
console.log("ha".repeat(NaN));                              //"" NaN等于0
console.log("ha".repeat("ha"));                             //"" 字符串会先转为数字
console.log("ha".repeat("3"));                              //"hahaha"

// 12. 补齐字符串长度
// padStart()和padEnd()方法用于补齐字符串的长度。如果某个字符串不够指定长度，会在头部或尾部补全。
// 如果原字符串的长度大于等于指定补全后的长度 则返回原字符串

console.log("x".padStart(3, "ab"));                         //"abx"
console.log("x".padStart(2, "ab"));                         //"ax"
console.log("x".padStart(1, "ab"));                         //"x"
console.log("x".padStart(4));                               //"   x" 省略第二个参数 默认用空格补齐

console.log("x".padEnd(5, "ab"));                           //"xabab"
console.log("x".padEnd(4, "ab"));                           //"xaba"

// 13. 字符串转为数字  parseInt()和parseFloat()
// parseInt(string,radix) radix为进制数 2~36 不传、传0、undefined默认为10 但若string以0x或0X开头 默认为16 2~36以外返回NaN
// 规定进制数之后，在str中从头查找“合法数字”进行转换 遇到不合法数字直接停止 
//不合法数字包括字母以及不符合进制规则的数字 例如二进制只有0和1是合法数字
const str17 = "123px456"
console.log(parseInt(str17));                               //123 'p'不是合法数字停止查找
console.log(parseInt(str17, 1));                            //NaN 2~36之外的数字
console.log(parseInt(str17, 2));                            //1 2进制只有0 1 合法
console.log(parseInt(str17, 3));                            //5 '12 -> 2*3^0+1*3^1=5'
console.log(parseInt("3", 2));                              //NaN
console.log(parseInt("010"));                               //10 按照十进制
// console.log(010);                                        //8 js将所有以0开头的数字视为八进制数字
console.log(parseInt("0x10"));                              // 输出结果：16
console.log(parseInt("  60  "));                            //60 开头和结尾的空格被允许

// parseFloat(string)
// 指定字符串第一位为正负号（+ 或 -）、数字 (0-9)、小数点，或者科学记数法中的指数（e 或 E）进行解析
// 解析过程遇到除上述以外其他字符 停止解析 返回当前结果

console.log(parseFloat(".3"));                              //0.3
console.log(parseFloat("10.00"));                           //10
console.log(parseFloat("-10.01"));                          //-10.01
console.log(parseFloat("40.5 years"));                      //40.5

console.log(parseFloat("n123"));                            //如果第一个字符不能被解析 直接返回NaN 

















