//includes是数组的实例化方法  它包含两个参数  第一个值是包含的值 第二个参数表示要开始都搜索的索引
//includes 返回的是boolean类型值

const arr = ['es6', 'es7', 'es8']
console.log(arr.includes('es7'));//true
console.log(arr.includes('es9'));//false


console.log(arr.includes('es7', 1));//true  从数组索引为1的位置上开始往后查找
console.log(arr.includes('es7', -1));//  从数组的后面第几个索引开找


console.log(arr.indexOf('es7'));//1 返回的是值的下标


const arr1 = ['es6', ['es7', 'es8'], 'es9']
console.log(arr1.includes(['es7', 'es8']));//false
console.log(arr1.indexOf(['es7', 'es8']));//-1


const arr2 = ['es6', 'es7', 'es8', NaN]
console.log(arr1.includes(NaN));//true
console.log(arr1.indexOf(NaN));//-1

