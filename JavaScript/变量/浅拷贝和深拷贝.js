// 递归
function fb(n) {
    if(n === 1 || n === 2) {
        return 1
    }
    return fb(n - 1) + fb(n - 2)
}

console.log(fb(5))


// 浅拷贝只是在根属性(对象的第一层级)创建了一个新的对象，但是对于属性的值是对象的话只会拷贝一份相同的内存地址。
var obj = {
    id: 1,
    name: "xiaoli",
    msg: {
        age: 22,
        sex: '男',
        hobby: {
            id: 11,
            color: "red"
        }
    }
}

var o = {}
for(var k in obj) {
    o[k] = obj[k]
}

//浅拷贝方法写法
Object.assign(o, obj)


// 复制变量值，对于引用数据，则递归至基本类型后，再复制。
// 深拷贝后的对象与原来的对象完全隔离，互不影响，对一个对象的修改并不会影响另一个对象。
var O = {}

function deepCopy(newobj, oldobj) {
    for(var k in oldobj) {
        //判断属性值数据类型,数组，对象，简单数据类型
        var item = oldobj[k]

        if(item instanceof Array) {
            newobj[k] = []
            deepCopy(newobj[k], item)
        } else if (item instanceof Object) {
            newobj[k] = {}
            deepCopy(newobj[k], item)
        } else {
            newobj[k] = item
        }
    }
}

deepCopy(O, obj)
console.log(O)

