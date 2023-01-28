/*
    导出变量
        export const a = 5
    导出字符串
        export const b = 'hahaha'
    导出一个函数
        export const sum = (x, y) => x + y
    导出对象
        const obj = {
             name:'gjk'
            }
        export { obj }

 */



//每次都单独写export很麻烦 可以统一导出  如果在一个文件同时导出多个 可以正常写 然后统一导出
// const a = 5
// const b = 'hahaha'
// const sum = (x, y) => x + y
// const obj = {
//     name: 'gjk'
// }

// class People {
//     constructor(name) {
//         this.name = name
//     }
//     showName() {
//         console.log(this.name);
//     }
// }

// export { a, b, sum, obj, People }



// export default
// const a = 55
// export default a//默认导出
// const b = 'hahah'
// export default b//每个模块 只能有一个默认导出 也就是只能有一个 export default

//export default const a=7//错误语法

// function sum(x, y) {
//     return x + y
// }
// export default sum

// export const str = 'lalal'

//通过 export default 统一导出
const a = 5
const b = 'hahaha'
const sum = (x, y) => x + y
const obj = {
    name: 'gjk'
}

class People {
    constructor(name) {
        this.name = name
    }
    showName() {
        console.log(this.name);
    }
}

export default {
    a,
    b,
    sum, 
    obj,
    People
}