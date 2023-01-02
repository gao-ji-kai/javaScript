//ES5中 学习的三个修饰符i(忽略大小写) m(多行匹配) g(全局匹配)

//ES6 y修饰符 (粘连修饰符) 会在每个剩余的第一个进行匹配 
const str = 'aaa_aa_aaa'
const reg1 = /a+/g //+ 表示出现一次或多次 /g会全局匹配  /g每次匹配剩余的
const reg2 = /a+/y// /y剩余的第一个开始匹配 
console.log(reg1.exec(str))//aaa
console.log(reg2.exec(str))//aaa

console.log(reg1.exec(str))//aa
console.log(reg2.exec(str))//null

console.log(reg1.exec(str))//aaa
console.log(reg2.exec(str))//aaa

//u修饰符 unicode
//ES5 范围 \u0000~\uffff