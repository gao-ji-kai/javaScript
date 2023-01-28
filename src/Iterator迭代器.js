//Iterator 是一种接口机制  为各种不同的数据结构提供统一访问的机制  主要是 让不支持便利的数据结构"可遍历"
/*
    遍历器的本质就是一个指针对象  执行第一个next函数  指针指向的是第一个成员
 
 */
function makeIterator(arr) {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? {
                value: arr[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}
let it = makeIterator(['a', 'b', 'c'])
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());




//数组中自带Symbol.iterator 遵循了Symbol.iterator协议
let arr = ['a', 'b', 'c']
console.log(arr);//Symbol(Symbol.iterator): ƒ values()
let it1 = arr[Symbol.iterator]()
console.log(it1.next());//{value: 'a', done: false}


let map = new Map()
//设置值
map.set('name', 'gjk')
map.set('age', '22')
map.set('address', 'tianjin')
console.log(map);//Symbol(Symbol.iterator): ƒ entries()
let it2 = map[Symbol.iterator]()
console.log(it2.next());//{value: Array(2), done: false}  done:false  value:(2)['name', 'gjk']


//让不可遍历的结构  遍历

let course = {
    allCourse: {
        frontend: ['ES', 'Vue', 'React'],
        backend: ['Java', 'Python', 'SpringBoot'],
        webapp: ['IOS', 'Android']
    }
}

// for (let c of course) {
//     console.log(c);
//     /*Iterator迭代器.js:1 Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
// In order to be iterable, non - array objects must have a[Symbol.iterator]() method.*/
// }

//可迭代协议:是否有 Symbol.iterator属性  有可用for  of 进行迭代
//迭代器协议:返回的必须是个对象 对象里面必须是next()函数 return {next(){ return{value,done}}}


// course[Symbol.iterator] = function () {
//     let allCourse = this.allCourse
//     let keys = Reflect.ownKeys(allCourse)
//     let values = []
//     return {
//         next() {
//             if (!values.length) {
//                 if (keys.length) {
//                     values = allCourse[keys[0]]
//                     keys.shift()
//                 }
//             }
//             return {
//                 done: !values.length,
//                 value: values.shift(),
//             }
//         }
//     }
// }

// for (let c of course) {
//     console.log(c);
// }


//用Generator实现
course[Symbol.iterator] = function* () {
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)//取到每一个key值
    let values = []
    while (1) {
        if (!values.length) {
            if (keys.length) {
                values = allCourse[keys[0]]
                keys.shift()
                yield values.shift()
            } else {
                return false
            }
        } else {
            yield values.shift()
        }
    }
   
}

for (let c of course) {
    console.log(c);
}