//Promise 的精髓在于对异步操作的状态管理
//resolve 表示当前异步回调成功
//reject  表示当前异步回调失败

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('hahah');
        //resolve('成功')
        reject('失败')
    }, 1000)
}).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
})


//当new一个Promise时  Promise中的代码会立即执行
//当new一个Promise时一共有三种状态    pending(进行中) fulfilled(已成功)  rejected(已失败)  状态不可改变 不可逆
let p1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve()
})
console.log(2);
p1.then((res) => {//.then可以理解成 有异步性  相当于微任务  先执行宏任务  再执行微任务
    console.log(3);
})



let p2 = new Promise((resolve, reject) => {
    resolve(1)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000)
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3)
    }, 1000)
})
console.log(p2);//fulfilled
console.log(p3);//pending
console.log(p4);//pending
setTimeout(() => {
    console.log(p3)//fulfilled
}, 2000)
setTimeout(() => {
    console.log(p4)//rejected
}, 2000)

p2.then((res) => {
    console.log(res);
})
p3.then((res) => {
    console.log(res);
})

p4.catch((err) => {
    console.log(err);
})


//Promise状态是不可逆的  一旦确定下来  就不能改变
let p5 = new Promise((resolve, reject) => {
    resolve(1)
    reject(2)
})
p5.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})

//Promise改造回调深渊

function ajax(url, successCallback, failCallback) {
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
            successCallback && successCallback(obj)//如果参数传递了 那么就调用这个参数
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
            failCallback && failCallback(xmlhttp.statusText)
        }
    }
}

new Promise((resolve, reject) => {
    ajax('/static/a.json', res => {
        console.log(res);
        resolve()
    })
}).then(res => {
    console.log('a成功');
    return new Promise((resolve, reject) => {
        ajax('/static/b.json', res => {
            console.log(res);
            resolve()
        })
    })
}).then(res => {
    console.log('b成功');
    return new Promise((resolve, reject) => {
        ajax('/static/c.json', res => {
            console.log(res);
            resolve()
        })
    })
}).then(res => {
    console.log('c成功');
})


//简化上面代码  将重复的代码封装成一个函数
function getPromise(url) {
    return new Promise((resolve, reject) => {
        ajax(url, res => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}

// getPromise('/static/aa.json')
//     .then(res => {
//         console.log(res);
//         return getPromise('/static/b.json')
//         //相当于把以下这段代码赋值到这 但是 还少一个return
//         // new Promise((resolve, reject) => {
//         //     ajax(url, res => {
//         //         resolve(res)
//         //     })
//         // })
//     }).then(res => {
//         console.log(res);
//         return getPromise('/static/c.json')
//     }).then(res => {
//         console.log(res);
//     })


getPromise('/static/aa.json')
    .then(res => {
        console.log(res);
        return getPromise('/static/b.json')
        //相当于把以下这段代码赋值到这 但是 还少一个return
        // new Promise((resolve, reject) => {
        //     ajax(url, res => {
        //         resolve(res)
        //     })
        // })
    }, err => {
        console.log(err);//GET http://localhost:8080/static/aa.json 404 (Not Found)  Not Found
        return getPromise('/static/b.json')

    }).then(res => {
        console.log(res);//undefined  前提条件是  之前的成功 才会请求  
        return getPromise('/static/c.json')
    }).then(res => {
        console.log(res);
    })


//读取失败时  不单独做处理 统一做处理
getPromise('/static/aa.json')
    .then(res => {
        console.log(res);
        return getPromise('/static/b.json')
        //相当于把以下这段代码赋值到这 但是 还少一个return
        // new Promise((resolve, reject) => {
        //     ajax(url, res => {
        //         resolve(res)
        //     })
        // })
    }).then(res => {
        console.log(res);//undefined  前提条件是  之前的成功 才会请求  
        return getPromise('/static/c.json')
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })