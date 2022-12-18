/*
      新声明方式 const(定义常量  不可以改变的)
    1.不属于顶层对象window
    2不允许重复声明
    3.不存在变量提升
    4.暂时性死区
    5.块级作用域
*/

//ES5中定义常量    Object.defineProperty  直接在对象上定义新的属性  Object.defineProperty(window, property)
//接收三个参数  第一个参数是对象名(指在那个对象下定义属性名)  第二个参数 属性名称 第三个参数是对象  给属性赋值
Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false,//是否可以重写  
})
console.log(PI)
PI = 6
console.log(PI)


const a = 7
//a = 8  //报错Assignment to constant variable.


//const b
//b = 6  //报错  Uncaught SyntaxError: Missing initializer in const declaration

//块级作用域
if (true) {
    const c = 5;
}
//console.log(c)//c is not defined


//不存在变量提升
// if (true) {
//     console.log(d)
//     const d=9
//  }


const obj = {
    name: 'gjk',
    age: 18,
    hobby: {
        name: 'football',
        year:11
    }
}
//如果想让对象也不可更改  可以使用freeze方法 (冻结) 这个方法是对象方法 不能用于数组  只是浅层的冻结 如果对象中又嵌套一层对象 还是能更改值的
Object.freeze(obj)
Object.freeze(obj.hobby)

console.log(obj)
obj.address = 'tianjin'
obj.hobby.year=12
console.log(obj)//{name: 'gjk', age: 18, address: 'tianjin'}

const array = [1, 2, 3]
array.push(4)
console.log(array)
/* 
    js中变量和常量的存储方式
两种存储方式  1.栈内存(stack) 2.堆内存(heap)

1.栈内存(stack)存放基本数据类型，存放的是引用类型的地址(只是把地址空间存放在此处)  num str  boolean  undefined null
2.堆内存(heap)存放引用类型   obj  array 
 
 const 声明的常量 如果是基本数据类型  值是不可以被改变的
 const 声明的常量 如果是引用数据类型  只是变量所指的内存地址是不变的  而地址中中存的内容是可以改变的 
*/



/* 
            何时用let何时用const
    如果在后续的操作中 值不改变  用const
    如果后续需要进行逻辑上的运算  用let
*/

