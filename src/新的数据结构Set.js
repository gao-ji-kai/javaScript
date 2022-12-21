/**
 *          Set中的数据是不会重复的
 *      Set与weakSet的区别 
 *          1.Set存储的可以是字符串、数组、对象 ， weakSet只能是对象
 *          2.Set可以循环遍历  weakSet不行
 *          3.weakSet是弱引用
 * 
 * 
 */

let s = new Set()
console.log(s);


//设置初始值
let s1 = new Set([1, 2, 3, 2])
console.log(s1);//Set(3) {1, 2, 3}
//方法  
//添加元素
s1.add('gjk').add('hahh') //支持链式操作
//删除元素
s1.delete(2)
//清空所有元素
//s1.clear()

//判断当前set中是否具有某一个值
console.log(s1.has('gjk'));//true
//当前的set中有几个值
console.log(s1.size);//4

console.log(s1);//Set(5) {1, 2, 3, 'gjk', 'hahh'}


//遍历
s1.forEach(item => console.log(item));

for (let item of s1) {
    console.log(item)
}

for (let item of s1.keys()) {
    console.log(item)
}

for (let item of s1.values()) {
    console.log(item)
}

for (let item of s1.entries()) {//既能得到索引又能得到值  只不过set的索引和值是一样的
    console.log(item)
}


//应用场景
//1.对数组去重
let arr = [1, 2, 3, 4, 5, 3, 1]
let arr1 = new Set(arr)
console.log(arr1)

//对数组进行合并去重  把两个数组合并 并把重复的去掉
let arr2 = [1, 2, 3, 4, 5]
let arr3 = [2, 4, 6, 8, 9]

let arr4 = new Set([...arr2, ...arr3])//使用扩展运算符进行数组合并
console.log(arr4)

//希望两个数组合并去重后 得到的还是数组
console.log([...arr4])//[1, 2, 3, 4, 5, 6, 8, 9]
console.log(Array.from(arr4))//[1, 2, 3, 4, 5, 6, 8, 9]

//取出两个数组之间重复的值

let s4 = new Set(arr2)
let s5 = new Set(arr3)
let result = new Set(arr2.filter(item => s5.has(item)))
console.log(result);


//去出两个数组的差集  
let arr5 = new Set(arr2.filter(item => !s5.has(item)))
let arr6 = new Set(arr3.filter(item => !s4.has(item)))
console.log(arr5);//{1, 3, 5}
console.log(arr6);//{6, 8, 9}
console.log([...arr5, ...arr6]);//[1, 3, 5, 6, 8, 9]



//WeakSet只能存储对象   不可遍历     WeakSet中的对象都是弱引用
let ws = new WeakSet()
//ws.add(1)//报错
const obj1 = {
    name: 'wyh'
}
const obj2 = {
    age: 16
}
ws.add(obj1)
ws.add(obj2)
//delete删除  js中 引用数据类型是存在堆内存里的  虽然长的结构一样 但是 是存在不同的内存地址中
ws.delete(obj1)//删除时对应的必须是同一个对象才可以

console.log(ws);
console.log(ws.has(obj2));//true

//遍历
ws.forEach(item => console.log(item))


/*
        垃圾回收机制 GC
    如果值一直被引用 就不会被清理  可能会造成内存泄漏
WeakSet 弱引用 不存在垃圾回收   比较适合临时存放一些对象

*/