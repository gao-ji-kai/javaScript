/**
 *          函数的参数
 *              1.参数的默认值   (1)写法简洁  (2)方便看出哪些参数是必传的  哪些是选传  (3)利于代码优化
 *              2.与解构赋值结合
 *              3.length属性
 *              4.作用域
 *              5.函数的那么属性
 * 
 */

//函数的默认值

function foo(x, y) { //x,y分别是函数的形参  形式上的参数
    y=y||'world'//如果y传值了  打印的就是传进来的值  如果没传就是默认值
    console.log(x, y);//hello undefined
}
//foo('hello','hhh')//调用该函数传的值是实参 实际参数   
foo('hello', 0)  //原本想打印hello 0  但是 最终结果打印的是hello world

//ES6  参数默认值的写法
function aoo(a,b='world') {
    console.log(a, b);//hello 0
}
aoo('hello', 0)

//参数默认值 细节 

// 1.参数变量是默认声明的 不能重复声明 函数内部 不能声明同名的变量
function boo(x = 5) {
    //let x = 1 //'x' has already been declared
}
boo()
// 2.对于函数的参数有默认值的时候，参数的名称是不能有重名的
function coo(x,  y = 5) {//Argument name clash 参数的名称有冲突
    
}
coo()
// 3.参数的默认值要放在参数的最后面
function doo(x, z,y = 1) {
    console.log(x,y,z);
}
doo(1, 3)


//函数的参数与解构赋值的结合  结构应该对应
function eoo({x,y=5}) {
    console.log(x, y);//undefined 5      1 5   Cannot read properties of undefined
}
//eoo({})
//进行了参数的解构赋值
// eoo({
//     x:1,
// })
//eoo()


function ajax(url, {
    body='',
    method = 'GET',
    headers={}
}={}) {
    console.log(method);//GET
}

ajax('http://www.baidu.com', {
    method:'Post'
})


//length 属性的长度 
function goo(x,y) {
    console.log(x, y);
}
console.log(goo.length);//length返回的是没有指定默认值的参数的个数


//参数的作用域  如果设置了参数的默认值 参数就会有一个单独的作用域
let x=1//全局变量
function hoo(x,y=x) {
    console.log(y)//2
}
hoo(2)


let a = 1//全局变量
function joo(y = a) { //y = a形成了一个单独的作用域 在此作用域 a是没有定义的  它会沿着作用域链一层层去找
    let a = 3
    console.log(y)//1
}
joo()

function koo(y = 1) { //y = a形成了一个单独的作用域 在此作用域 a是没有定义的  它会沿着作用域链一层层去找
    let b = 3
    console.log(y)//b is not defined
}
koo()



//函数的name属性

function loo() {
  
}
console.log(loo.name)

console.log((new Function).name)//anonymous 匿名


//函数的bind属性
function zoo(x,y) {
    console.log(123)
    console.log(this)//{name: 'hahah'}

}
zoo.bind({ name: 'hahah' }, 1, 3)()//bind可以改变this指向
console.log(zoo.bind({}).name)//bound zoo
console.log((function () { }).bind({}).name)//bound 