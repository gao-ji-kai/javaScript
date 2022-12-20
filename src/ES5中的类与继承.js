//ES5中是通过方法来模拟类  类首字母大写(约定俗成)

//类  
function People(name, age) {
    console.log(this, 'People');//指向的是实例化对象
    //实例属性 定义到构造函数里面
    this.name = name,
    this.age = age
    //一般情况下 方法不会定义到构造函数里面 因为每次new时 都会new一个方法
    // this.showName = function () {
    //     console.log('我的名字是' + this.name);
    // }
    People.count++

}
//静态属性  直接定义到类里面的
People.count = 0

//静态方法
People.getCount = function () {
    console.log(this, '静态方法');//指向当前构造函数而不是实例化对象
    console.log('当前有' + People.count + '个人');
}



//方法定义到类的原型下面   实例方法
People.prototype.showName = function () {
    console.log('我的名字是' + this.name);
}

//实例化对象
let p1 = new People('gjk', 19);
console.log(p1);//People {name: 'gjk', age: 19}
p1.showName();


let p2 = new People('lisi', 22)
console.log(p2);//People {name: 'lisi', age: 22}
p2.showName();

//打印静态属性
console.log(People.count)
//调用静态方法
People.getCount()




//静态属性  静态方法
let str = new String('hahaha')
console.log(str);

let arr = new Array(1, 3, 5)
console.log(arr);

let obj = new Object()
console.log(obj);

//不需要new的  方法 就是静态方法
console.log(Math.max(2, 8));
console.log(Math.random());



//ES5中的继承
//父类
function Animal(name) {
    this.name = name
}
//方法定义在原型上面
Animal.prototype.showName = function () {
    console.log('名字是' + this.name);
}

//子类  构造函数继承+原型继承=组合式继承
function Dog(name,color) {
    //构造函数继承(只能继承父类的属性)  call可以改变this指向
    Animal.call(this, name)//第一个参数 将this指向谁  继承属性
    this.color = color
}
//原型继承(只能继承方法)
Dog.prototype = new Animal()//将Dog的原型 指向Animal的实例化对象
Dog.prototype.constuctor=Dog

let dog = new Dog('coco', 'black')
console.log(dog);//name属性是继承过来的
dog.showName()
