const str = 'hahah'
console.log(str.padStart(8, 'x'));//从字符串的前面填充  第一个参数是填充到多少位  第二个参数是用什么填充
console.log(str.padEnd(8, 'y'));

console.log(str.padStart(8));//如果不传第二个参数 默认会用空格填充



//应用场景  经常要输出日期  yyyy-mm-dd 2023-01-07  如果日期返回的是一位数  就用0填充

const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0')//返回值是 0-11   +1后称为number类型了 因为padStart是字符串下的方法 所以得转成字符串
const day = (now.getDate()).toString().padStart(2, '0')
console.log(`${year}-${month}-${day}`);//2023 0 29


//只展示手机号后四位 其余的用* 起到保密的作用
const tel = '13333333333'
const newTel = tel.slice(-4).padStart(tel.length, '*')
console.log(newTel);

//padEnd应用场景  获取时间戳
console.log(new Date().getTime());//时间戳固定长度13位 ms
//后端传过来的时间戳可能是10位  前端需要处理 

timestamp.padEnd(13,'0')//伪代码
