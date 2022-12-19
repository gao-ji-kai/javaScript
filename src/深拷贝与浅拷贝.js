/*
    如何把一个对象复制给另一个对对象  Object.assign()
    //Object.assign()浅拷贝 对于复制基本类型可以直接替换 但是复制引用类型的  不安全 会丢失值


*/
let target = {
    a: {
        b: {
            c: 1
        },
        e: 4,
        f: 5,
        g: 6
    }
}
let source = {
    a: {
        b: {
            c: 1
        },
        e: 2,
        f: 3
    }
}
Object.assign(target, source)
console.log(target);

//深拷贝 两个值互相并不影响
let a = 5
let b = a
a = 6
console.log(a, b);//6 5

//浅拷贝 当一个值变化 另一个值也跟着变化
let obj1 = {
    name: 'gjk',
    age: 23
}
let obj2 = obj1//指向同一块内存地址
console.log(obj1);//{name: 'gjk', age: 23}
obj1.age = 22
console.log(obj2);//{name: 'gjk', age: 22}

//JSON就是一个字符串  '{"a":"hello","b":"world"}'
//JSON.parse()  将json格式的字符串 转换成对象
let obj = JSON.parse('{"a":"hello","b":"world"}')
console.log(obj);//{a: 'hello', b: 'world'}
//JSON.stringify() 将对象转化成json格式的字符串
let str = JSON.stringify(obj)
console.log(str);



//对象的话 可以使用 JSON.parse和JSON.stringify实现深拷贝
let obj3 = {
    name: 'gjk',
    age: 23
}
let str1 = JSON.stringify(obj3)
let obj4 = JSON.parse(str1)
obj3.age = 19
console.log(obj4);//{name: 'gjk', age: 23}


//判断传递进来的数据是什么类型的  
//tyopeof判断数据类型不准确 只能判断基本数据类型 不能判断引用数据类型
let checkType = data => {
    console.log(Object.prototype.toString.call(data).slice(8, -1));//从第八个下标开始取  最后一个中括号也不要
    return Object.prototype.toString.call(data).slice(8, -1)
}


let deepClone = target => {
    let targetType = checkType(target)
    let result//最终拷贝的结果
    if (targetType === 'Object') {
        result = {}
    } else if (targetType === 'Array') {
        result = []
    } else {
        return target
    }
    for (let i in target) {
        let value = target[i]//取每个属性所对应的值
        console.log(value)
        //判断value所对应的数据类型 因为有可能数组或对象里面还包着对象或数组
        let valueType = checkType(value)
        if (valueType === 'Object' || valueType === 'Array') {
            //递归  调用当前函数本身
            result[i] = deepClone(value)//递归 
        } else {
            result[i] = value
        }
        console.log(result)
    }
    return result
}

let arr1 = [1, 2, { a: 1 }]
let arr2 = deepClone(arr1)
arr2[2].a = 44
console.log(arr1);

// let obj5 = {
//     name: 'wyh',
//     hobby:['codding','running']
// }

// let obj6 = deepClone(obj5)
// obj6.hobby[0] = 'eating'
// console.log(obj5);
// console.log(obj6);