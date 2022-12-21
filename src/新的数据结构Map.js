let m = new Map()
let obj = {
    name: 'gjk'
}

//给Map中设置值
m.set(obj, 'hahah')
console.log(m);
//获取值
console.log(m.get(obj));

//删除值
// m.delete(obj)
// console.log(m);

console.log(m.has(obj))//true



let map = new Map([
    ['name','wyh'],//key value
    ['age',34]
])
console.log(map);
console.log(map.size);
map.set('name', 'lisi')//会覆盖原有的值
console.log(map);


//遍历
map.forEach((value, key) => console.log(value, key))

for (let [key, value] of map) {
    console.log(key, value)
}

for (let key of map.keys()) {
    console.log(key)//name  age
}

for (let value of map.values()) {
    console.log(value)//lisi 34
}

for (let [key, value] of map.entries()) {
    console.log(key, value)//name lisi  age 34
}


//应用场景   object一样


//weakmap 弱引用  键名只支持引用数据类型  不支持clear 和遍历 size
let wm = new WeakMap()
wm.set([1], 2)
//wm.clear()//报错
console.log(wm);

let wm1 = new WeakMap()
let elem = document.getElementsByTagName('h1')
wm.set(elem, 'info')
console.log(wm.get(elem));