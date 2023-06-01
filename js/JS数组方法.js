const arr = [1, 2, 3];

// 类型相关
Array.isArray(arr);//判断是否为数组
arr.toString();//将数组转化为字符串，可选参数为以何种进制显示数字，不改变原数组
arr.join()//将数组转换为字符串，返回转换后的字符串,可选参数为字符串分隔符，不改变原数组
arr.join('-').split('-')// 字符串的split方法：将字符串按照指定的分隔符，组装为数组，不改变原字符串；
Array.from(arrayLike)//将伪数组转化为真数组
Array.of(2, 3, 4)//创建数组，将一系列值转换成数组


console.log(Array.of(2, 3, 4));
