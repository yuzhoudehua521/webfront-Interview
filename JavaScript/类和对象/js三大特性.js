// 1.封装
// 把公共属性和方法通过函数抽象封装起来，对外暴露接口进行操作和访问
// 把抽象出来的属性和对属性的操作封装在一起，属性被保护在内部，程序的其他部分只能通过特定的操作(函数)，才能对属性进行操作
// 属性：私有属性和公有属性
// 方法：私有方法和公有方法


// 通过构造函数进行封装，js当中只能依靠变量的作用域来实现封装的特性
function Person(name, age) {
    this.name = name  // 公有属性
    this.age = age

    const sex = '男'  // 私有属性

    // 共有方法
    this.show = function() {
        console.log('我是：' + this.name + '.我的年龄是：' + this.age)
    }
    // 私有方法
    function show1() {
        console.log(sex)
    }
}

Person.prototype.fun1 = function() {
    this.show();  // 正确

    // show1();  // 报错
}






// 2.继承，
// 节约内存，提升效率，减少代码冗余
// 构造函数继承 es6的class本质上仍然是构造函数
// new  本质就是构造函数继承的过程，构造函数中的this便是继承者所处环境
var p1 = new Person('豆豆', 20)
p1.fun1()       //我是：豆豆.我的年龄是：20







// 不通过构造函数继承
// 1.call或apply来继承该方法中的属性和方法。







// 2.使用prototype链
const Chinese = {
    country: '中国'
}

function Man(obj) {
    //构造函数
    function F() {

    }
    //原型等于输入参数对象
    F.prototype = obj
    //返回新的对象
    return new F()
}

Doctor = Man(Chinese)
Doctor.career = 'doctor'
console.log(Doctor.career)      //doctor
console.log(Doctor.country)     //中国
Doctor.country = '美国'
console.log(Doctor.country)     //美国
console.log(Chinese.country)    //中国  没有改变原来对象的属性和方法






// 3.浅拷贝，只拷贝第一层，基本数据类型地址发生改变，引用类型（对象/Function/数组）还是原来地址
function extendCopy(p){
    var c={}
    for(var i in p){
        c[i]=p[i];
    }
    return c;
}




// 4.深拷贝，完全拷贝另一对象，互不影响
function deepCopy(o,c){
    var c=c||{};
    for(var i in o){
        //如果是引用数据类型
        if (typeof o[i] ==="object") {
            if (o[i] instanceof Array) {
                o[i]=[]
            }else{
                o[i]={}
            }
            deepCopy(o[i],c[i]);
        }else{
            c[i]=o[i];
        }

    }
}









// 3.多态
// 操作同一函数，不同对象返回不同结果
var makeSound=function (animal) {
    animal.sound();
}
var Duck=function () {
}
var Dog=function () {
}
Duck.prototype.sound=function () {
    console.log("嘎嘎嘎")
}
Dog.prototype.sound=function () {
    console.log("旺旺旺")
}
makeSound(new Duck());
makeSound(new Dog());