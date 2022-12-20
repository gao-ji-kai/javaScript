//原始数据类型  undefined null Boolean  string  array object symbol

//symbol  声明方式
let s = Symbol()
let s1 = Symbol()
console.log(s);
console.log(s1);
console.log(s === s1);//false


let s2 = Symbol('foo')//可以把一个字符串作为参数传递进去
let s3 = Symbol('boo')
console.log(s2);
console.log(s3);
console.log(s2 === s3);//false


const obj = {
    name: 'lalal',
    toString() {
        return this.name
    }
}
let s4 = Symbol(obj)//如果参数是个对象的话 会自动调用给对象的toString方法
console.log(s4);//Symbol([object Object])


let s5 = Symbol('hahah')
//s5.name = 'ooo'
console.log(s5);
console.log(s5.description);//hahah


let s6 = Symbol.for('opopo')//Symbol.for是在全局下面定义的
let s7 = Symbol.for('opopo')
console.log(s6 === s7);//true


function foo() {
    return Symbol.for('foo')
}
const x = foo()
const y = Symbol.for('foo')
console.log(x === y)



const s8 = Symbol('foo')
console.log(Symbol.keyFor(s8));//undefined
const s9 = Symbol.for('foo')
//Symbol.keyFor作用是返回一个已经注册过得Symbol
console.log(Symbol.keyFor(s9))


//应用场景  
const grade = {
    张三: { address: 'xxx', tel: '111' },
    李四: { address: 'xxx', tel: '222' },
    李四: { address: 'zzz', tel: '333' },
}


const stu1 = 'lisi'
const stu2 = 'lisi'

const grade1 = {
    [stu1]: { address: 'xxx', tel: '222' },
    [stu2]: { address: 'zzz', tel: '333' },
}
console.log(grade1);//只输出一个lisi 第二个lisi会覆盖第一个


const stu3 = Symbol('lisi')
const stu4 = Symbol('lisi')
const grade2 = {
    [stu3]: { address: 'xxx', tel: '222' },
    [stu4]: { address: 'zzz', tel: '333' },
}
console.log(grade2);//会全都打印出来
console.log(grade2[stu3]);



const sym = Symbol('hahahah')
class User {
    constructor(name) {
        this.name = name
        this[sym] = 'pkc'
    }
    getName() {
        return this.name + this[sym]
    }
}
const user = new User('HELLO')
console.log(user.getName())

//通过for in 是无法遍历出Symbol属性的值
for (let key in user) {
    console.log(key);
}
//无法遍历出Symbol属性的值
for (let key of Object.keys(user)) {
    console.log(key);
}
//只能取到Symbol属性的值
for (let key of Object.getOwnPropertySymbols(user)) {
    console.log(key);
}

//既能取到普通值 也能取到Symbol属性的值
for (let key of Object.Reflect.ownKeys(user)) {
    console.log(key);
}

  
//可以用Symbol消除魔术字符串   魔术字符串是指 在代码中多次调用 容易写错 耦合性强
function getArea(shape) {
    let area = 0
    switch (shape) {
        case 'Triangle':
            area = 1
            break
        case 'Circle':
            area = 2
            break
    }
    return area
}
console.log(getArea('Triangle'));

const shapeType = {
    triangle: Symbol(),//其实后面传什么值并不重要 所以可以使用Symbol
    circle: Symbol(),
}
function getArea1(shape) {
    let area = 0
    switch (shape) {
        case shapeType.triangle:
            area = 1
            break
        case shapeType.circle:
            area = 2
            break
    }
    return area
}
console.log(getArea1(shapeType.triangle));