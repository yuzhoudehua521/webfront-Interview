// JavaScript 中，万物皆对象！但对象也是有区别的。分为普通对象和函数对象，
// Object 、Function 是 JS 自带的函数对象。
console.log(typeof Object); //function 
console.log(typeof Function); //function  



// 我们可以使用 2 种方式来创建一个新对象：

// 1. 通过“构造函数”创建
let user1 = new Object();
console.log(typeof user1)

// 2. 通过“字面量”创建,语法糖，还是通过new构造函数创造
// let user = {};


// 当然对象的键（ key ）也可以是多词属性，但必须加引号，使用的时候，必须使用方括号（ [] ）读取：
let user = {
    name : 'leo',
    "my interest" : ["coding", "football", "cycling"]
}
user["my interest"]; // ["coding", "football", "cycling"]
delete user["my interest"];

// 我们也可以在方括号中使用变量，来获取属性值：
let key = "name";
let user = {
    name : "leo",
    age  : 18 
}
// ok
user[key]; // "leo"
user[key] = "pingan";

// error
user.key; // undefined



// keys返回对象属性值，返回数组
var obj = {
    id: 22,
    uname: xiao
}

var ke = obj.keys(obj)
console.log(ke) //[id, uname]


// 定义新属性，Object.defineProperty
var obj1 = {
    id: 22,
    uname: xiao,
    sex: '男'
}

Object.defineProperty(obj1, 'id', {
    value: 888,
    writable: true,     //是否可被重写， false不可以
    enumerable: true,    //是否可被枚举
    configurable: true    //是否可被删除或再此被修改
})

console.log(obj1)