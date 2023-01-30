// const arr = ['ex6', 'ex7', 'ex8', 'ex9']
// arr[Symbol.iterator] = function () {
//     let nextIndex = 0
//     return {
//         next() {
//             return nextIndex < arr.length ? {
//                 value: arr[nextIndex++],
//                 done: false
//             } : {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }

// for (let item of arr) {
//     console.log(item);
// }


function getPromise(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // resolve(time)
            resolve({
                value: time,
                done: false
            })
        }, time)
    })
}
//异步操作
const arr = [getPromise(1000), getPromise(2000), getPromise(3000)]
//期望  当前异步操作执行完 再执行下一个异步操作

arr[Symbol.asyncIterator] = function () {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? arr[nextIndex++] :
                Promise.resolve({//相当于   promise的静态方法 直接会返回成功后的结果
                    value: undefined,
                    done: true
                })
        }
    }
}


//for  of 会瞬间执行完    for await of 会等待异步操作执行完在执行下一个
async function test() {
    for await (let item of arr) {
        console.log(item);
    }
}
test()


