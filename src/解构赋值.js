/*  
                          解构赋值
        按照一定模式，从数组火对象中取值，对变量进行赋值
                *数组解构
                *对象解构
                *字符串解构
 */

let arr = [1, 2, 3]
// 老方法
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

//解构赋值   惰性的   如果传值以传的值为准 如果不传值  就是默认值
let[a,b,c]=arr
console.log(a, b, c)//123


let [d, e, [f,g,h]] = [1, 2, [3, 4, 5]]
console.log(d, e, f, g, h);//12345

// let [d, e, [f]] = [1, 2, [3, 4, 5]]
// console.log(d, e, f);//123

let [q, w, r] = [1, 2, [3, 4, 5]]
console.log(q, w, r); //1 2 (3) [3, 4, 5]

let [z, x, v, n] = [1, 2, [3, 4, 5]]
console.log(z, x, v, n);//1 2 (3) [3, 4, 5] undefined


//对象的解构赋值
let user = {
        name: 'gjk',
        age:18
}
//老方法
// let name = user.name
// let age = user.age
//console.log(name, age);//gjk 18

//解构赋值
let { name, age } = user   
//  let { age, name } = user   将name和age调换位置 也不影响输出结果   因为对象是键值对的方式一一对应的
//如果希望改名的话 可以给原有对象的key起别名 let { age:userage, name:username } = user    如果想打印结果 就需要打印别名 如果打印原来的名字会报错
console.log(name, age)


//字符串的解构赋值
let str = 'hahahh'
for (let i = 0; i < str.length; i++){
        console.log(str[i]);//h a h a h h
}
//可以把字符串的解构理解成数组的解构   
let [y, u, p, j, m, l] = str
console.log(y, u, p, j, m, l)//h a h a h h


//解构赋值应用场景
/**
     1.赋默认值
        数组
        let [a,b,c=7]=[4,5,6]
        console.log(a,b,c) //4,5,6
        
        对象
        let {name,age=18}={
            name:'wyh,
            //age:87
        }
        console.log(name,age)//wyh 18
 * 
        function foo(){
            console.log(123)
        }
        let [a=foo()]=[1]//这时不会打印出123  因为解构是惰性的  后面传值  就是传的值 如果不传值 才是默认值
 * 
      2.函数参数的解构赋值
        数组
        function foo([a,b,c]){
            console.log(a,b,c) //234
        }
        let arr=[2,3,4]
        foo(arr)

        对象
        function foo({name,age,school='pkc'}){  如果对象中传school属性了  那么值就是传过来的值
            console.log(name,age,school) //hhh,23,pkc  
        }
        let obj={
            name: 'hhh',
            age:23
        }
        foo(obj)


      3.返回值解构  
        function foo(){
           let obj={
            name: 'hhh',
            age:23
                }
            return obj
        }
       let {name, age} = foo()
       console.log(name,age) //hhh,23

      4.提取JSON数据
        场景：后端传过来的数据一般是json形式  如 let json='{"a": "hello", "b":"world"}' 我们需要将后端传过来的json数据解构
        let json='{"a": "hello", "b":"world"}'
        //如果按照字符串的方式去解构 只能得到每一个值 而我想将他解构成键值对的形式  a:"hello",b:"world"
        JSON提供了一种方法 将字符串转换成对象  就可以使用对象的方式来进行解构了
        let {a，b}= JSON.parse(json)
        console.log(a,b) //hello,world
        
 * 
 */
