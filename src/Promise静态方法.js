//promise静态方法  直接promise.就可以 而实例方法需要先new

let p1 = Promise.resolve('success')//表示成功的状态
//console.log(p1);
p1.then(res => {
    console.log(res);
})


let p2 = Promise.reject('fail')//表示失败的状态
console.log(p2)
p2.catch(err => {
    console.log(err);
})


//实际应用场景  
function foo(flag) {
    if (flag) {
        return new Promise(resolve => {
            resolve('success')
        })
    } else {
        //return 'fail'
        return Promise.resolve('fail')
    }
}
foo(false).then(res => {
    console.log(res);
})




// 当前需求 是 三个异步操作都完成后  再去操作一些什么事儿
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        resolve('1成功')
    }, 1000)
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(2);
        resolve('2成功')
        // reject('2失败')

    }, 2000)
})
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(3);
        resolve('3成功')

    }, 3000)
})

//Promise.all()   数组中 只要有一个异步操作失败  就全都失败  所有都完成 才完成
Promise.all([p3, p4, p5]).then(res => {
    console.log(res);
}, err => {
    console.log(err);

})
//Promise.race()  当数组中的异步操作有一个完成 就默认所有的异步操作都完成
Promise.race([p3, p4, p5]).then(res => {
    console.log(res);
}, err => {
    console.log(err);

})


//实际应用场景
const imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
let promiseArr = []
imgArr.forEach(item => {
    promiseArr.push(new Promise((resolve, reject) => {
        //图片上传的操作
        resolve()
    }))
})
Promise.all(promiseArr).then(res => {
    console.log('图片全部上传完成');
})


//加载图片时  有时会成功 有时会失败  给图片设置一个超时时间

function getImg() {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function () {
            resolve(img)
        }
        img.src = 'http://www.xxx.com/xxx.jpg'
        //img.src = 'https://www.imooc.com/static/img/index/logo.png'
    })

}
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('图片请求超时')
        }, 2000)
    })
}

Promise.race([getImg(), timeout()]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);

})