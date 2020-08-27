'use strict';   //严格模式下全局作用域中的函数this指向undefined不是window，定时器不变

// prototype用于构造函数的共有方法
// new创建构造函数的实例，构造函数中的this指向这个实例
// 只有当一个函数以 new 关键字来调用的时候，我们才能说它是一个构造函数。

function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    console.log('call调用了')
}



// 用new调用构造函数，函数内部会发生如下变化：
// 创建一个this变量，该变量指向一个空对象。并且该对象继承函数的原型；
// 属性和方法被加入到this引用的对象中；
// 隐式返回this对象（如果没有显性返回其他对象）
const star1 = new Star("刘德华", 40)

// new 的过程伪代码
// new Star{
//     //创建一个空对象
//     var obj = {}
//     //继承原型
//     obj.__proto__ = Star.prototype
//     //通过call改变this，传递属性或方法
//     var result = Star.call(obj, "刘德华", 40)
//     //返回new结果
//     return typeof result === 'obj' ? result : obj
// }


// new 运算符操作过程
// 当一个函数被使用 new 运算符执行时，它按照以下步骤：
// 每当创建一个实例的时候，就会创建一个新的内存空间
// 创建实例的时候，函数体内部的 this 指向实例
// 由于函数体内部的this指向新创建的内存空间，默认返回 this ，就相当于默认返回了该内存空间


console.log(star1.constructor === Star)     //true


// 对于一些共有属性和方法(原型，prototype)，如果每次创建实例都包含这些属性和方法有点浪费内存，缺乏效率
// Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
// 实例的prototype对象都是同一个内存地址，因此就提高了运行效率。


Star.prototype.sing = function() {
    console.log('唱歌明星')
}
Star.prototype.type = '明星'

console.log(star1.type)     //明星
//Star的共有属性和方法继承给了star1吗
console.log(Star.prototype.isPrototypeOf(star1))     //true


// 每个函数对象都有__proto__，constructor,prototype


// 每一个JavaScript对象（除了null）都具有的一个属性，叫__proto__,这个属性会指向该对象的原型
console.log(Star.__proto__)         //[Function]
console.log(star1.__proto__)      //Star { sing: [Function], type: '明星' }
console.log(Star.prototype === star1.__proto__)      //true
console.log(Star.prototype.__proto__)                //{}
console.log(star1.prototype)                        //undefined
console.log(Object.prototype.__proto__ === null)     // true  null 表示“没有对象”，即该处不应该有值。
console.log(star1.constructor === Star)             //true
console.log(Star.constructor)                       //[Function: Function]
// 每一个原型都有一个constructor属性指向关联的构造函数。
console.log(Star.prototype.constructor === Star)     //true


// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin















