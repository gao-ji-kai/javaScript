/**
 *         箭头函数
 *           箭头函数与普通函数的差别
 *           1.this指向定义时所在的对象，而不是调用时所在的对象   其实箭头函数中并没有this 只是继承了他外面一层执行上下文中的this
 *           2.不可以当做构造函数
 *           3.不可以使用arguments对象
 * 
 */

//ES5
/**
 * 两种定义区别
 * 
 * 第一种会有函数预定义   先定义或先调用 都不会有问题
 * 第二种存在变量提升
 * 
 */
//第一种声明方式
function sum(x, y) {
    return x + y
}
console.log(sum(3, 5));

//第二种声明方式
// console.log(sum);//sum is not defined
// let sum = function (x, y) {
//     return x + y
// }
// console.log(sum());

//ES6中使用箭头函数
let sum1 = (x, y) => {
    return x + y
}
//简写方式  当函数体里只有一行代码  
//let sum1 = (x, y) => x + y
 
console.log(sum1(3, 4));

//箭头函数   1.this指向定义时所在的对象，而不是调用时所在的对象
let Btn = document.querySelector('#btn')
Btn.addEventListener('click', function () {
    console.log(this);//this叫做当前对象的引用  像汉语中的他 <button id="btn">点击</button>
    setTimeout(function () { //setTimeout是window下的方法
         //想让this还是指向button  可以改变this的指向 
        //ES5中有三个方法可以改变this指向 call apply bind(不会立即执行)
        console.log(this);//this叫做当前对象的引用  像汉语中的他  Window  
    }.bind(this), 1000)
    //箭头函数中this指向定义时所在的对象，而不是调用时所在的对象
    setTimeout(() => {
        console.log(this); <button id="btn">点击</button>
    },1000)
}) 

//2.不可以当做构造函数
//ES5中的类 
function People(name, age) {
    console.log(this);//指向People
    this.name = name,
    this.age = age
}
//箭头函数  People is not a constructor
let People = (name, age) => {
    this.name = name,
    this.age = age
}
let p1 = new People('gjk', 23)
console.log(p1);


//3.不可以使用arguments对象
// let foo=function(){
//     console.log(arguments);
// }
let foo = () => {
    console.log(arguments);//arguments is not defined 
}
foo(1,2,3)