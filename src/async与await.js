// function foo() {
//     return 'hhh'
// }
// console.log(foo());


async function foo() {
    return 'hahaah'
}
console.log(foo());//Promise { <fulfilled>: 'hahaah'}


async function boo() {
    let result = await 'gjk'//await 后面应该跟异步操作
    console.log(result);
}

boo()


function timeout() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log(1);
            resolve(1)
        }, 1000)
    })
}
//async await 相当于异步操作同步化  
async function coo() {
    const res = await timeout()//如果没有写await的话 就会先输出2  过一秒后 在输出1 
    console.log(res);
    console.log(2);
}

coo()


//异步操作失败的情况处理

function timeout1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
            // reject()
        }, 1000)
    })
}

async function doo() {
    return await timeout1()//await关键字一定要使用在async的内部
}

doo().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

import ajax from './ajax'

function request(url) {
    return new Promise((resolve, reject) => {
        ajax(url, res => {
            resolve(res)
        })
    })
}

async function getData() {
    const res1 = await request('../static/a.json')
    console.log(res1);
    const res2 = await request('../static/b.json')
    console.log(res2);
    const res3 = await request('../static/c.json')
    console.log(res3);
}

getData()