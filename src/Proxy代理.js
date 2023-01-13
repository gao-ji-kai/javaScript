//ES5中也提供了个相似的api  可以对属性进行拦截
let obj = {
    name: 'gjk'
}
let newVal = ''
Object.defineProperty(obj, 'name', {
    get() {
        console.log('get');
        return newVal
    },
    set(val) {
        console.log('set');
        //this.name = val会造成死循环
        newVal = val
    }
})
obj.name = 'wyh'
console.log(obj.name);



//ES6 proxy
let obj1 = {}
let p = new Proxy(obj1, {})//对应两个参数  第一个参数是要劫持的参数或者方法 第二个参数是代理配置 Hook 钩子函数
p.name = 'world'
console.log(obj1.name);


//proxy 常用拦截方法

//get
let arr = [7, 8, 9]
//想查看每个数组的下标是否对应有值
arr = new Proxy(arr, {
    get(target, prop) {//target 当前传进来的数组  prop传的是1
        console.log(target, prop);
        return prop in target ? target[prop] : 'error'
    }
})
console.log(arr[1]);


let dict = {
    'hello': '你好',
    'world': '世界'
}
dict = new Proxy(dict, {
    get(target, prop) {
        return prop in target ? target[prop] : prop
    }
})
console.log(dict['world'])
console.log(dict['hahah'])



//set
let arr1 = []
//有一个需求 数组有限制 只能设置数字类型  设置其他类型的就抛出错误
arr1 = new Proxy(arr1, {
    set(target, prop, val) {//第一个参数是目标对象 第二个参数指当前目标属性的值，第三个属性是给目标属性要设置的值
        if (typeof val === 'number') {
            target[prop] = val
            return true
        } else {
            return false
        }
    }
})
arr1.push(5)
arr1.push(6)
console.log(arr1[0], arr1[1], arr1.length);


//has  判断当前的key 是否在对象里面  返回boolean类型的值
let range = {
    start: 1,
    end: 5
}
//判断当前值是否在范围内
range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end
    }
})
console.log(2 in range);//true
console.log(6 in range);//false


//ownKeys 用于拦截对象循环遍历
let obj2 = {
    name: 'hahah',
    [Symbol('js')]: 'es6'
}
console.log(Object.getOwnPropertyNames(obj2));//返回不是Symbol类型的键名  ['name']
console.log(Object.getOwnPropertySymbols(obj2));//返回只是Symbol类型的键名 [Symbol(js)]
console.log(Object.keys(obj2));//取不带Symbol类型的键名
for (let key in obj2) {
    console.log(key);//取不带Symbol类型的键名
}


let userinfo = {
    username: 'gjk',
    age: 20,
    _password: '****'//用下划线代表当前属性是私有属性   循环时  不想让遍历出私有属性
}

userinfo = new Proxy(userinfo, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})

for (let key in userinfo) {
    console.log(key)
}

console.log(Object.keys(userinfo));//['username', 'age']


let user = {
    name: 'laoliu',
    age: 11,
    _password: '*****'
}
//用proxy防止对下划线属性的任何访问 不可读取 不可设置 不可删除  不可循环遍历读取
user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('不可访问')
        } else {
            return target[prop]
        }
    },
    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw new Error('不可访问')
        } else {
            target[prop] = val
            return true
        }
    },
    deleteProperty(target, prop) {//拦截删除操作
        if (prop.startsWith('_')) {
            throw new Error('不可删除')

        } else {
            delete target[prop]
            return true
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})
// console.log(user.age);
// console.log(user._password);//抛错
// user.age = 19
// console.log(user.age);
// try {
//     user._password = '111'//Uncaught Error: 不可访问

// } catch (e) {
//     console.log(e.message);//不可访问
// }

try {
    delete user._password
} catch (e) {
    console.log(e.message);//不可删除
}
//console.log(user.age);


for (let key in user) {
    console.log(key);
}



//apply  用于拦截函数调用
let sum = (...args) => {
    let num = 0
    args.forEach(item => {
        num += item
    })
    return num
}

sum = new Proxy(sum, {
    apply(target, ctx, args) {//对应三个参数  第一个参数  拦截的目标  第二个参数 上下文  第三个参数   对应目标参数的数组
        return target(...args) * 2
    }

})
console.log(sum(1, 2));//6
console.log(sum.call(null,1,2,3));//第一个参数是改变this指向 第二个是传递的参数
console.log(sum.apply(null, [1, 2, 3]));//第二个参数是数组   12



//construct  拦截new命令
let User = class {
    constructor(name) {
        this.name = name;
    }
}
User = new Proxy(User, {
    construct(target,args,newTarget) {//必须返回一个对象才可以
        return new target(...args)
    }
})
console.log(new User('gjk'));//User {name: 'gjk'}