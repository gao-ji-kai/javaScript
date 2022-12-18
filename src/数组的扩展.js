/**   
 *   数组的扩展
 *     1.类数组/伪数组  并不是真正意义上的数组，但他也同样length属性 并不具有数组方法
 *     2.Array.form()  将 类数组/伪数组 转化成真正意义上的数组
 *     3.Array.of() 初始化数组
 *     4.copyWithin() 替换数组中的元素  返回新的数组
 *     5.fill() 填充
 *     6.includes()
 * 
 */

//DOM 操作  文档对象模型
//类数组/伪数组
let divs = document.getElementsByTagName('div')//通过标签获取元素
console.log(divs);//HTMLCollection []

let divs2 = document.getElementsByClassName('xx')//通过class名字获取元素
console.log(divs2)//HTMLCollection

let divs3 = document.querySelectorAll('.xx')//html5中通过calss名来进行选择器
console.log(divs3)//NodeList 节点列表
//判断是否为数组的方法
console.log(divs3 instanceof Array)//false
//divs3.push(222) // divs3.push is not a function

function foo() {
    console.log(arguments)//[1, 'hahah', false, callee: ƒ, Symbol(Symbol.iterator): ƒ] 虽然也有返回值  但是 不是真正意义上的数组 
    console.log(arguments instanceof Array)//false
}
foo(1,'hahah',false)




//将伪数组转化成真正意义上的数组
//ES5中有 slice方法能将类数组/伪数组转化成真正的数组  slice是从已有的数组中返回选定的元素 会返回一个新的数组
//slice
let arr = Array.prototype.slice.call(divs3)
console.log(arr)//[]
arr.push(111)
console.log(arr)//[111]

//ES6 Array.from
let arrayLike = {
    0:'es6',
    1: 'es7',
    2: 'es8',
    length: 3
}
 let arr1 = Array.from(arrayLike)
console.log(arr1);// ['es6', 'es7', 'es8']


//Array.of() 初始化数组
//初始化数组
let arr3 = new Array(1, 2) //new Array被称为数组的构造器
console.log(arr3);//[1, 2]

let arr4 = new Array(3) //new Array被称为数组的构造器
console.log(arr4)//[empty × 3] 空数组x3  长度为3

//目标  想构造一个数组  传入的参数  就是数组的值
let arr5 = Array.of(1, 2)
console.log(arr5);//[1, 2]

let arr6 = Array.of(4)
console.log(arr6);//[4]

//Array.of()能将各个类型的值拼成数组
let arr7 = Array.of(1, 'hello', true, { name: 'www', age: 22 })
console.log(arr7);//[1, 'hello', true, {…}]



//copyWithin()  返回新的数组
let array = [1, 2, 3, 4, 5]
//第一个参数是从哪个参数开始去替换数据(必选)  第二个参数是从这个位置开始读取元素(可选)  第三个参数是表示到哪个位置停止(可选) 不传表示到默认到末尾
console.log(array.copyWithin(1, 3));//[1, 4, 5, 4, 5]

//fill填充
let array1 = new Array(3).fill(5)
console.log(array1)// [5, 5, 5]

let array2 = [1, 2, 3, 4, 5]
//接收三个参数 第一个参数 用什么填充 第二个参数 数组下标开始的位置, 第三个参数 数组下边结束的位置(不包括)
console.log(array2.fill('hhh', 1, 3)) //[1, 'hhh', 'hhh',4,5]



//includes() 包含 返回boolean类型  包含返回true 不包含返回false
//ES5中有indexOf  如果数组中包含该元素  会返回该元素所在的索引  如果不存在 会返回-1 不能监测数组中是否包括NaN
let array3 = [1, 2, 3, NaN]
console.log(array3.indexOf(NaN))//-1
console.log(array3.includes(NaN))//true

