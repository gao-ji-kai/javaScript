const obj = {
    name: 'hhh',
    age: 15,
    address: '天津'
}

console.log(Object.keys(obj));

const res = Object.keys(obj).map(key => obj[key])
console.log(res);


//Object.values
console.log(Object.values(obj));

//Object.entries 返回的是个二维数组
console.log(Object.entries(obj));
for (let [key, val] of Object.entries(obj)) {
    console.log(`${key}: ${val}`);
}

//如果是数组  第一个值是数组的下标
console.log(Object.entries(['a', 'b', 'c']));


const desc = Object.getOwnPropertyDescriptors(obj)


console.log(desc);//value就是本身值  writable 是否可以改 enumerable是否可以通过for in 循环 configurable能否用 delete运算符删除


//如何设置这些值

const obj1 = {}

Reflect.defineProperty(obj1, 'name', {
    value: 'gjk',
    writable: true,//是否可修改
    configurable: true,//当前属性是否能用delete运算符删除
    enumerable: false//是否可以用for of  进行循环
})
Reflect.defineProperty(obj1, 'age', {
    value: 22,
    writable: true,//是否可修改
    configurable: true,//当前属性是否能用delete运算符删除
    enumerable: true//是否可以用for of  进行循环
})
console.log(obj1);
obj1.name = 'lisi'
// delete obj1.name
// console.log(obj1);

for (let key in obj1) {
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptors(obj1));//输出这个对象下所有的属性
console.log(Object.getOwnPropertyDescriptor(obj1,'age'));//只输出age下的属性
