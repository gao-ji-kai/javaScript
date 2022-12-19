/*
    1.属性简写方式 :对象是键值对的方式 如果key和value对应名字一样 就可以将简写
    2.属性名的表达式



*/

//有情形 name和age都不是写死的 而是外面传进来的
let name = 'gjk'
let age=18
let obj = {
    name,//对象是键值对的方式 如果key和value对应名字一样 就可以将简写
    age
}
console.log(obj);

//因为对象是键值对的存在 value可以传变量 key也可以 如果key是一个变量 那么就应该加个[]
let name1 = 'wyh'
let age1 = 18
let s='school'
let obj1 = {
    name,//对象是键值对的方式 如果key和value对应名字一样 就可以将简写
    age,
    [s]: 'pkc',

    // study: function () {
    //     console.log(this.name+'正在敲代码');
    // }
    study1: ()=> {//箭头函数的this指向的是定义时的this而不是调用时的this
        console.log(this.name + '正在敲代码');
    },
    study2() {
        console.log(this.name+'正在敲代码');
    }
}

console.log(obj1);//{name: 'gjk', age: 18, school: 'pkc'}
obj1.study2()



//Object.is()  判断两个值是否严格相等 类似于===
//对象判断不仅判断内容 还判断内存地址是否相等
console.log(Object.is(2, '2'));//false
console.log(Object.is(NaN, NaN));//true
console.log(Object.is(+0, -0));//false

let obj3 = {
    name: 'gjk',
    age:18
}
let obj4 = {
    name: 'gjk',
    age: 18
}
//js中 存储引用类型 存的是引用地址 真正内容是存在堆内存中
console.log(obj3 == obj4);//false
console.log(Object.is(+obj3, -obj4));//false
//如果想让两个对象相等  let obj3=obj4


//对象扩展运算符
let x = {
    a: 3,
    b:4
}
//let y = { ...x }
//如果不用扩展运算符 也可以使用Object.assign()
let y = {}
Object.assign(y,x)//合并对象的  第一个参数为目标对象  如果对象中有相同的属性 那么就会被覆盖
console.log(y);//{a: 3, b: 4}

//in  判读当前对象中是否包含某个属性  还可以用在数组上
 
let z = {
    c: 5,
    a: 8
}
console.log('a' in z);//true

let arr = [3, 4, 5]
console.log(3 in arr);//不是判断3是否在arr中 而是判断数组下标为3的位置是否有值

//对象的遍历
let obj5 = {
    name: 'wyh',
    age: 25,
    school:'pkc'
}
//1.for  in
for (let key in obj5) { 
    console.log(key,obj5[key]);
}

//2.Object.keys
Object.keys(obj5).forEach(key => {
    console.log(key, obj5[key]);
})

//3.Object.getOwnPropertyNames
Object.getOwnPropertyNames(obj5).forEach(key => {
    console.log(key, obj5[key]);
})

//4.Reflect.ownKeys
Reflect.ownKeys(obj5).forEach(key => { 
    console.log(key, obj5[key]);
})