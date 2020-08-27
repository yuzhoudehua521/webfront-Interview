// 一、普通函数中this
// 在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的this值
// （1）总是代表着它的直接调用者，如obj.fn，fn里的最外层this就是指向obj
// （2）默认情况下，没有直接调用者，this指向window
// （3）严格模式下（设置了'use strict'），this为undefined
// （4）当使用call，apply，bind（ES5新增）绑定的，this指向绑定对象



function foo () {
    const _this = this
    console.log(_this)

}
                                                  
foo()




// 二、ES6箭头函数中this
// （1）箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this,即ES6箭头函数里this的指向就是上下文里对象this指向，
// 偶尔没有上下文对象，this就指向window
// （2）即使是call，apply，bind等方法也不能改变箭头函数this的指向

function Data1() {
    this.data = 0
    setInterval(() => {
        this.data ++
        console.log(this.data)
    }, 1000)
}

Data1()