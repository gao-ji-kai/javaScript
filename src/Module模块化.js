/*
     模块化规范 
            CommomJS:Node.js  一般都是服务端 js一般都是指客户端的js
            AMD(异步模块定义): require.js 
            CMD:sea.js
            ES6 
                export  每个模块 可以有多个export  导入时名字必须与导出时一致 
                import  如果是export导出 需要{}   export default导出 不需要{}
                as 起别名
                export default 每个模块 只能有一个  导入时名字可与导出时不一致 
 */

// import { a as aa, b, sum, obj, People } from './module'

/*
    导入的模块名必须和导出的模块名一样  是具名引用 要不然找不到
    as 是起别名 起了别名 只能使用别名

    如果是默认导出  导入的时候 名字随便起 不用非得和导出的名字一样
   每个模块 只能有一个默认导出 也就是只能有一个 export default
    const a = 55
    export default a//默认导出
    import aa from './module'

 */

// console.log(aa, b);
// console.log(sum(1, 5));
// console.log(obj);
// let p = new People('gjk')
// p.showName()


// import add,{str} from './module' //结合
// console.log(add(3,3),str);

// import mod from './module'
// console.log(mod);//会输出一个大对象 大对象中 就是所有导出的东西
// console.log(mod.a);
// console.log(mod.b);
// console.log(mod.obj);
// console.log(mod.sum(3, 8));

//如果导出的东西比较多  可以用*

import *as mod from './module'
console.log(mod);//导出的是个模块
console.log(mod.default.a);
console.log(mod.default.b);