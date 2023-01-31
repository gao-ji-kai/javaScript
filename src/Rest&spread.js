const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]
console.log(arr3);//[1, 2, 3, 4, 5, 6]



const obj1 = {
    name: 'gjk',
    age: '22'
}

const obj2 = {
    address: 'tianjin'

}

//克隆对象
const obj3 = { ...obj1 }
obj1.age = 18//obj3中的年龄还是22  所以用这种的真正的克隆 而不是引用
console.log(obj3);//{name: 'gjk', age: '22'}

//合并对象
const obj4 = { ...obj1, ...obj2 }
console.log(obj4);//{name: 'gjk', age: 18, address: 'tianjin'}  如果有相同的属性 后面的会覆盖前面的


const obj5 = {
    name: 'gjk',
    age: '22',
    school: 'pkc',
    course: 'es'
}
//剩余运算(...) rest  必须放在所有参数的最后一位
const { name, age, ...rest } = obj5
console.log(name);//gjk
console.log(age);
console.log(rest);//{school: 'pkc', course: 'es'}
