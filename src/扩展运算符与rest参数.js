/**
 *      扩展运算符与rest参数   
 *          两种写法都是 ...
 *       1.扩展运算符:把数组或者类数组展开成用逗号分隔开的值
 *       2.rest参数:把逗号隔开的值组合成一个数组
 * 
 * 
 *       如果三个点在等号的左边或者在形参上 就是rest参数(剩余参数)
 *      如果三个点在等号右边或者在实参上  就是扩展运算符
 * 
 */


//扩展运算符
function foo(a, b, c) {
    console.log(a, b, c);//123
}
let arr = [1, 2, 3]
//foo(arr)//如果用解构赋值的话  函数接受参数的类型就得和参数类型保持一致
foo(...arr)//扩展运算符

//有两个数组，希望两个数组进行合并
let arr1 = [2, 3, 4]
let arr2 = [4, 5, 6]
//ES5的方法  因为push只能是值 不能是一个个数组 所以ES5使用原型下的方法
//Array.prototype.push.apply(arr1, arr2)
console.log(arr1)//[2, 3, 4, 4, 5, 6]
//ES6方法
arr1.push(...arr2)
console.log(arr1)//[2, 3, 4, 4, 5, 6]

let str ='hahah'
let str1 = [...str]
console.log(str1);//['h', 'a', 'h', 'a', 'h']



//rest参数 剩余参数

//场景 不定参数的求和问题   ES5解决办法
function aoo(x, y, z) {//传入的实参可能是不确定的
    //方法1  依次对参数进行判断  需要嵌套很多层if
    // if () {

    // }
    //方法2  函数里有个参数  arguments 获取到的是个类数组/伪数组   可以循环arguments
    console.log(arguments); //Arguments(2) [1, 2, callee: (...), Symbol(Symbol.iterator): ƒ]
    let sum =0
    Array.prototype.forEach.call(arguments, function (item) {
        sum +=item
    })
    return sum
}
console.log(aoo(1, 2))//3
console.log(aoo(1, 2, 3))//6


//ES6解决办法
function boo(x, y, z) {//传入的实参可能是不确定的
    console.log(arguments); //Arguments(2) [1, 2, callee: (...), Symbol(Symbol.iterator): ƒ]
    let sum = 0
    //ES6中Array.from可以将类数组/伪数组转化成真正意义上的数组
    Array.from(arguments).forEach(function (item) {
        sum += item
    })
    return sum
}
console.log(boo(1, 2))//3
console.log(boo(1, 2, 3))//6


//参数个数不确定时可以使用剩余运算符
function coo(...args) {//传入的实参可能是不确定的
    console.log(args); //Arguments(2) [1, 2, callee: (...), Symbol(Symbol.iterator): ƒ]
    let sum = 0
    args.forEach(function(item) {
        sum += item
    })
    return sum
}
console.log(coo(1, 2))//实参正常传 想怎么传就怎么传  [1, 2]
console.log(coo(1, 2, 3))//[1, 2, 3]


//知道哪些参数必传  哪些参数不确定
//已知X是必传的  后面不确定传多少个参数   剩余的  把确定的整走剩下的全要
function doo(x,...args) {
    console.log(x);//1
    console.log(args);//[2, 3]
}
doo(1, 2, 3)


//与解构联合使用
let [x, ...y] = [7, 8, 9]//解构  两边的类型需要保持一致
console.log(x);//7
console.log(y);//[8, 9]
