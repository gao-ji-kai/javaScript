/**
 *   ES5中数组遍历方法
 *      1.for循环
 *      2.forEach():没有返回值，只针对每个元素调用func
 *      3.map():返回新的Array，每个元素为调用func的结果
 *      4.filter():返回符合func条件的元素数组
 *      5.some():返回boolean，判断是否有元素是符合func条件
 *      6.every():返回boolean，判断每个元素是否符合func条件
 *      7.reduce():接收一个函数作为累加器
 *      8.for in  有问题  不推荐使用它遍历数组
 * 
 * 
 * 
 *   ES6新增的数组遍历方式
 *      1.find():返回第一个通过测试的元素
 *      2.findIndex():返回的值为通过第一个元素的索引
 *      3.for of  values()获得数组每一项的值   keys()获得数组的每一项索引 entries()既获得数组每一项值也获得索引
 * 
 * 
 */


let arr = [1, 2, 3, 4]

//ES5
//for循环和forEach区别   for循环是支持break和continue的   也就是  for循环可以在中途停止 而forEach是不能够中途停止的

//for循环
for (let i = 0; i < arr.length; i++){
    if (arr[i] == 2) {
        break
    }
    console.log(arr[i]);//1234
}

//forEach  三个参数  第一个参数代表当前正在遍历的对象,第二个参数表示当前正在遍历对象的索引,第三个参数表示当前遍历的数组本身
arr.forEach(function (elem,index,array) {
    console.log(elem);//1234
    console.log(index);//0123
})


//map循环
//map会循环每一项 并返回新的数组 不会改变原数组的值  而forEach只是简单的循环
arr.map(function (value) { 
    console.log(value);//1234
})

let result = arr.map(function (value) {
    value += 1
    return value
}) 
console.log(arr, result);//(4) [1, 2, 3, 4] (4) [2, 3, 4, 5]


//filter循环(过滤) 不改变运原数组  返回新的数组  返回数组的值是满足条件的值
let result1 = arr.filter(function (value) {
    return value % 2 == 0
})
console.log(arr, result1);//(4) [1, 2, 3, 4] (2) [2, 4]


//some 不改变原数组    遍历数组中是否有符合条件的元素  只要找到一个符合条件的 就返回true
let result2 = arr.some(function (value) { 
    return value % 2 == 0
})
console.log(arr, result2);//(4)[1, 2, 3, 4] true


//every 不改变原数组  遍历数组中是否有符合条件的元素  所有的元素都符合条件才返回true 否则返回false
let result3 = arr.every(function (value) {
    return value % 2 == 0
})
console.log(arr, result3);//(4)[1, 2, 3, 4] false


//reduce 接收两个参数     应用场景  求出数组每一项的和  找到当前数组里最大的值  数组去重
/*第一个参数是function() function()中接收四个参数 prev表示上一次回调返回的值，cur表示当前正在处理的值，index表示当前正处理的元素的索引 array表示原数组
第二个参数是初始值   实现累加器的功能  */

//求出数组每一项的和 
let sum = arr.reduce(function (prev, cur,index,array) {
    return prev + cur
}, 0)
console.log(sum);//10

//找到当前数组里最大的值
let max = arr.reduce(function (prev, cur,) {
    return Math.max(prev, cur)
})
console.log(max);

//数组去重
let arr1 = [1, 2, 3, 3, 2, 4]
let res = arr1.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur)//判断prev中是否包含cur  如果不包含 返回-1 并push到prev中
    return prev
}, [])
console.log(res); //[1, 2, 3, 4]


//for in
Array.prototype.foo = function () {//在数组原型下定义一个方法
    console.log('foo');
}
for (let index in arr){
    console.log(index, arr[index]);//不仅能将属性中的每一项都循环出来 还能循环出来数组原型上的方法
}


////////////////////////////////

//ES6


//find返回第一个通过测试的元素 不改变原数组
let res1 = arr.find(function (value) {
    return value == 2
})
console.log(arr, res1);//[1, 2, 3, 4]  2


//findIndex 返回第一个通过测试的元素的索引
let res2 = arr.findIndex(function (value) {
    return value == 2
})
console.log(arr, res2);//[1, 2, 3, 4] 1


//for of
for (let item of arr) {
    console.log(item);//1234
}
//等同于
// for (let item of arr.values()) {
//     console.log(item);//1234
// }

//取索引
for (let item of arr.keys()) {
    console.log(item);//0123
}

//内容索引都取
for (let [index,item] of arr.entries()) {
    console.log(index,item);
//    [0, 1]
//    [1, 2]
//    [2, 3]
//    [3, 4]
}


