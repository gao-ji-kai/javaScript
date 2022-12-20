/**
 *      ES6中的类与继承
 *          class
 *          extends
 *          constructor
 *          static
 *          super
 *          get/set
 * 
 */



//ES6中提供了关键字 class  calss是语法糖
class People {
    constructor(name, age) {
        //实例属性   ES6中可以将实例属性定义到类的最顶层
        this.name = name;
        this.age = age;
        this._sex = -1//引入_sex是为了避免给sex赋值时形成死循环
    }
    //在顶层设置属性 如果是get 是将属性设置可读  不可赋值
    //如果业务中需要对属性进行罗逻辑处理时  就应该使用get set
    get sex() {
        if (this._sex === 1) {
            return 'male'
        } else if (this._sex === 0) {
            return 'female'
        } else {
            return 'error'
        }
    }
    set sex(value) {
        if (value === 0 || value === 1) {
            this._sex = value
        }
    }
    showName() {
        console.log(this.name);
    }
    //定义静态方法
    static getCount() {
        return 5
    }
}
//ES6中定义静态属性
People.count = 100
console.log(People.count);

let p1 = new People('wyh', 21)
console.log(p1);
p1.sex = 2//Cannot set property sex of #<People> which has only a getter
console.log(p1.sex);
//使用静态方法  类下调用
//console.log(p1.getCount());//报错
console.log(People.getCount());




//ES6中实现继承  extends
class Coder extends People {
    constructor(name, age, company) {
        super(name, age)
        this.company = company
    }
    showCompany() {
        console.log(this.company)
    }
}

let c1 = new Coder('gjk', 24, 'lalala')
console.log(c1)
c1.showName()
c1.showCompany()
//在类的顶层定义的属性 也可以被继承
c1.sex = 0
console.log(c1.sex);
//静态方法可以被继承
console.log(Coder.getCount());



