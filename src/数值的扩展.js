ES5中
//十进制 ->二进制
const a = 5//101
console.log(a.toString(2));//参数2 是将原本定义的数转换成2进制的数  8是转换成8进制的数

//二进制 ->十进制
const b = 101
console.log(parseInt(5.5))//将5.5转换成整数
console.log(parseInt(b, 2))//还有第二的参数 把参数转换成什么进制的数


//ES6中  0B表示二进制   0O表示八进制  大小写都可以
//const c = 0101//报错 语法不支持
const c = 0B0101
console.log(c);//5

const d = 0O777
console.log(d);//511


console.log(Number.isFinite(5));//判断当前数值是否是有限的
console.log(Number.isFinite(Infinity))//false
console.log(Number.isFinite('Infinity'))//false
console.log(Number.isFinite(true))//false

//NaN  不是个数  'a'/5 -> NaN
console.log(Number.isNaN(NaN));//判断当前值是否为NaN
console.log(Number.isNaN(17));



//    Number.parseInt转换成整数  Number.parseFloat转换成浮点型
console.log(Number.parseInt(3.3));//3
console.log(Number.parseFloat(3));

//如果不写Number  就调window下的parseInt
console.log(window.parseInt(3.3));//3
console.log(window.parseFloat(3));


//  Number.isInteger 判断当前数是否为整数
console.log(Number.isInteger(3))//true
console.log(Number.isInteger(3.3))//false


/*
面试题  0.1+0.2 ===0.3?  ES中数字运算当中  精度缺失的问题  
因为计算机是以2进制存储数字的  0.1在存储的过程中除不开  舍弃了后面的部分 得到的是近似值 所以 造成了数字确实
所以0.1+0.2 不等于0.3

*/

//ES中存储数字以  IEEE 754 双精度标准存储

//如果超出存储范围  就会舍弃后面的  只是得到一个近似值
console.log(0.1000000000000001);//0.1000000000000001
console.log(0.10000000000000001 === 0.1);//0.1 true


//ES6中最大值 2的53次方
const max = Math.pow(2, 53)
console.log(max);//9007199254740992
console.log(max + 1);

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);


//ES6新增的数学方法  
console.log(Math.trunc(5.8));//去除一个数的小数部分，返回整数部分
console.log(Math.trunc(true));//1  会先转换成number类型
console.log(Math.trunc(undefined));//NaN
console.log(Number.parseInt(true));//NaN


console.log(Math.sign(3));//判断当前数 是正数还是负数还是0  正数返回1
console.log(Math.sign(-3));//-1
console.log(Math.sign(0));//0
console.log(Math.sign(NaN));//NaN
console.log(Math.sign(true));//1


console.log(Math.cbrt(8));//计算一个树的立方根  2
console.log(Math.cbrt('hahah'));//NaN