new Promise((resolve, reject) => {
    setTimeout(() => {
       // resolve('success')
        reject('fail')
    }, 1000)
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
}).finally(() => {//不管成功或者失败 都会走finally
    console.log('finally');
})

//应用场景  发送ajax请求  不能让用户一直等着 需要loading