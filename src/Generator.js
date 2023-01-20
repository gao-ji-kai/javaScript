//另一种异步编程解决方案 Generator函数  构造器

//普通函数  中间不会受干扰  不可停止
function foo() {
    for (let i = 0; i < 3; i++) {
        console.log(i);//0 1 2
    }
}
foo()

/*
Generator函数  会有*号  在函数中会有一个yield 只能在Generator函数内部去使用  很像调试页面时的debugger   
Generator函数是可以暂停的  不会立即执行，而是返回一个生成器迭代器对象
*/

function* boo() {
    for (let i = 0; i < 3; i++) {
        console.log(i);//什么也没输出   因为Generator函数 需要我们手动的执行它
        yield i//生产 产出

    }
}
// console.log(boo());
let b = boo()
console.log(b.next());//.next()Generator函数固定语法  {value: 0, done: false} value表示当前状态对应的值 done表示是否执行完成
console.log(b.next());//{ value: 1, done: false }
console.log(b.next());//{value: 2, done: false}
console.log(b.next());//{value: undefined, done: true}

//yield 只能在Generator函数内部去使用
// function* gen(args) {
//     //不可以
//     args.forEach(item=>{
//         yield item +1
//     })
// }


function* gen(x) {
    let y = 2 * (yield (x + 1))
    let z = yield (y / 3)
    return x + y + z
}

let g = gen(5)//x对应的值是5
//next()函数是可以传递参数的 next 的参数表示的是上一条执行的返回值
console.log(g.next());//执行的是yield后边的一句  是x+1  {value: 6, done: false}
console.log(g.next());//没有传参  相当一是个underfined  {value: NaN, done: false}
console.log(g.next());//{value: NaN, done: true}


let g1 = gen(5)//x对应的值是5
//next()函数是可以传递参数的 next 的参数表示的是上一条执行的返回值
console.log(g1.next());//  x=5 执行的是yield后边的一句  是x+1  {value: 6, done: false}
console.log(g1.next(12));// y=24 (yield (x + 1)是12   {value: 8, done: false}
console.log(g1.next(13));// z=13 {value: 42, done: true}


//求7的倍数
function* count(x = 1) {//无限循环
    while (true) {
        if (x % 7 === 0) {
            yield x
        }
        x++
    }
}

let n = count()
console.log(n.next().value);//7
console.log(n.next().value);//14
console.log(n.next().value);//21
console.log(n.next().value);//28




//Generator函数如何对异步状态进行异步管理

function ajax(url, callback) {
    //1.创建XMLHttpRequest对象
    var xmlhttp
    if (window.XMLHttpRequest) {//如果有XMLHttpRequest  说明是IE7以后的版本
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');//兼容早期浏览器
    }

    //2.发送请求  
    xmlhttp.open('GET', url, true)
    xmlhttp.send()

    //3.接受服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj);
            callback(obj)
        }
    }
}

function request(url) {
    ajax(url, res => {
        console.log(res);
        getData.next(res)
    })
}


//Generator函数
function* gen2() {
    let res1 = yield request('../static/a.json')
    console.log(res1);
    let res2 = yield request('../static/b.json')
    console.log(res2);
    let res3 = yield request('../static/c.json')
    console.log(res3);
}
let getData = gen2()

getData.next()