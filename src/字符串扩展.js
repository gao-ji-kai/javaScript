/**
 * 字符串的Unicode表示法 
 * 字符串遍历
 * 
 */

/*
        unicode
            es6 \uxxxx  码点0000~ffff  es6中加上{}取值就被扩大了
            \u20BB7 -> \u20BB+7   ₻7   es6可以写成 \u{20BB7}
            \u{41} ->A

 */

console.log('\z' == 'z');//true
//如果  \HHH后面是三个八进制的数  就代表是一个字符
//console.log('\172'==='z');

//如果 \xHH x后面跟着两个16进制的数  也代表一个字符
//console.log('\x7A'==='z');


/**
 * 模板字符串  
 *      
 */
const str1 = '哈哈哈哈哈哈啊啊啊啊哈哈哈'//普通字符串
//需要普通字符串换行
const str2 = '哈哈哈哈哈哈\n' + '啊啊啊啊\n' + '哈哈哈\n'
console.log(str2);

//模板字符串
const str4 = `哈哈哈哈哈哈
啊啊啊啊
哈哈哈`
console.log(str4);


const str5 = `
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul
`

//字符串中需要进行逻辑上的运算或处理
const a = 20
const b = 10
const c = 'JS'
const str3 = '我的年龄是:' + (a + b) + ',我在学' + c
console.log(str3);

//模板字符串
const str6 = `我的年龄是:${a + b},我在学${c}`
console.log(str6);


//嵌套模板
const isLargeScreen = () => {
    return false
}
//普通写法
let class1 = 'icon'
class1 += isLargeScreen() ? ' icon-big' : ' icon-small'
console.log(class1);

//模板字符串写法
const class2 = `icon icon-${isLargeScreen() ? 'big' : 'small'} `
console.log(class2);

//带标签的模板字符串
const foo=(a,b,c,d) => {
    console.log(a);//不带变量的 raw 原始字符串
    console.log(b);
    console.log(c);
    console.log(d);
}
//foo(1,2,3,4)
const name = 'gjk'
const age = 20
foo`我叫${name},我今年${age}岁`


//字符串方法
console.log(String.fromCharCode(0x20BB7));//ES5
console.log(String.fromCodePoint(0x20BB7))//ES6

//indexOf  includes
const str7 = 'hahah'
console.log(str7.indexOf(1))//-1
console.log(str7.includes(1))//false

//startsWith endsWith  是否以什么开头或结尾 返回boolean类型值
console.log(str7.startsWith('ha'))//true
console.log(str7.endsWith('ha'))//false

//repeat  重复
let newStr=str7.repeat(5)
console.log(newStr)//hahahhahahhahahhahahhahah