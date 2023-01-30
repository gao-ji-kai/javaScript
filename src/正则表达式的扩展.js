//dot  www.baidu.com   dotAll
//.点用来匹配任意单个字符的  不能匹配多级的unicode  不能匹配行终结符

const reg = /./
console.log(reg.test('5'));//true
console.log(reg.test('x'));//true
console.log(reg.test('\n'));//false
console.log(reg.test('\u{2028}'));//false


const reg1 = /./s //s修饰符就相当于开启了dotAll模式
console.log(reg1.test('5'));//true
console.log(reg1.test('x'));//true
console.log(reg1.test('\n'));//true
console.log(reg1.test('\u{2028}'));//true

/*
    修饰符
    g  全局匹配
    i  忽略大小写
    m  跨行匹配
    y  粘性的
    u  匹配unicode
    s  dotAll模式  

*/


//具名组匹配
const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2023-01-30')
console.log(date);
console.log(date[1]);
console.log(date[2]);
console.log(date[3]);


const reg3 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
console.log(reg3.exec('2023-01-30'));
const groups = reg3.exec('2023-01-30');
// const year = groups.year; // 2023
// const month = groups.month; // 01
// const day = groups.day; // 30

//解构赋值
const { year, month, day } = groups
console.log(year, month, day);


// 先行断言

const str = 'hahah'
console.log(str.match(/hah(?=ah)/));

//后行断言   后面是确定的   前面必须是hah 如果不是就不行
console.log(str.match(/(?<=ah)/));