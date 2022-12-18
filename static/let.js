//var -> variable 可变的

//写var和不写var是不一样的    用var定义相当于在当前作用域声明了一个变量  不使用var相当于对属性赋值
var a = 5;
console.log(a)
console.log(window.a)
//delete a //delete只能删除对象的属性 不能删除变量
//console.log(a)

b = 6; //不写var相当于全局 window下的一个属性
console.log(b)
console.log(window.b)
//delete b
//console.log(b)


//1.不属于顶层对象window
let c = 6
console.log(c)
console.log(window.c)

/*
        新声明的let
    1.不属于顶层对象window
    2.不允许重复声明
    3.不存在变量提升
    4.暂时性死区
    5.块级作用域

*/

//2.不允许重复声明
var d = 5
var d = 6
console.log(d)  //不报错

// let e = 5
// let e = 6
// console.log(e)//Uncaught SyntaxError: Identifier 'a' has already been declared

//3.不存在变量提升
console.log(f)//undefined
var f = 6

//console.log(g)//Uncaught ReferenceError: Cannot access 'a' before initialization
let g = 8

//4.暂时性死区   所有的变量 必须先声明在使用
var aa = 9
if (true) {
    aa = 8
    //let aa     //Cannot access 'aa' before initialization
}
// function foo(a = b, b = 3) {
//     console.log(a,b)
// }
// foo()

//5.块级作用域
for (var i = 0; i < 4; i++) {
    console.log('循环内的' + i) //循环内的0 循环内的1 循环内的2 循环内的3
}
console.log('循环外的' + i)//循环外的4  如果是let  会报错  i is not defined


if (false) {
    var bb = 6
}
console.log(bb)//undefined  如果是let就报错了


/*下面for循环  setTimeout是异步操作  js中有一个事件循环机制 eventloop setTimeout会等主线程空闲执行
    for循环是个同步操作  会直接执行三次 但是当for循环执行时  setTimeout并没有执行
    当console.log(ii)的时候    for循环已经执行完成了
    如果不想输出三个3  只想输出0,1,2  闭包  
    定义一个匿名函数  只能调用一次

    闭包   =>有一个外部函数  还有一个内部函数  内部函数会调用外部函数的变量  这样能保证外部函数变量不被释放
*/

// for (var ii = 0; ii < 3; ii++) {
//     (function (j) {//形参
//         setTimeout(function () {
//             console.log(j)//输出0,1,2
//         })
//     })(ii)//实参
//     // setTimeout(function () {
//     //     console.log(ii)//输出三次3
//     // })
// }

for (let cc = 0; cc < 5; cc++) {
    setTimeout(function () {
        console.log(cc)//输出0,1,2,3,4
    })
}