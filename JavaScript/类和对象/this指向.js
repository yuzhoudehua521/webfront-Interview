// this的值
// 上面说过执行上下文有两种，一个全局执行上下文，一个函数执行上下文。

// a.全局执行上下文的this
// 指向window全局对象

function a(){
    console.log(this);
}
//独立运行
a();  //window


//外围函数
function a(){
    //b函数在里面
    function b(){
        console.log(this);
    }
    //虽然在函数中，但b函数独立运行,不是那个对象的方法
    b();
}
a();  //window


//一个对象
var object = {
    //getName是Object的方法
    getName : function(){
        //x是getName里面的函数，它是作为函数调用的，this就是window啦
        function x(){
            console.log(this);
        }
        x();
    }
}
object.getName();  //window

// b.函数执行上下文的this(主要讲函数的this)
// 在《JavaScript权威指南》中有这么几句话：
// 1.this是关键字，不是变量，不是属性名，js语法不允许给this赋值。
// 2.关键字this没有作用域限制，嵌套的函数不会从调用它的函数中继承this。
// 3.如果嵌套函数作为方法调用，其this指向调用它的对象。
// 4.如果嵌套函数作为函数调用，其this值是window（非严格模式），或undefined（严格模式下）。

//内部一个方法
var object = {
    name : "object",
    //getName是Object的方法
    getName : function(){
        console.log(this === object);
    }
}
object.getName(); //true ， 说明this指向了object




var name = "window";
var obj = {
    name : "obj"
};
function fn (){
    console.log(this.name);
}

//将fn通过call或bind或apply直接绑定给obj，从而成为obj的方法。
fn.call(obj);  //obj


// 箭头函数this
// 箭头函数没有自己的 this，箭头函数会捕获其所在的上下文的this值，作为自己的this值，无法改变指向


let user = {
    name : 'leo',
    say : () => {
        console.log(`hello ${this.name}`);
    },
    hello(){
        let fun = () => console.log(`hello ${this.name}`);
        fun();
    }
}

user.say();   // hello      => say() 外部函数是 window
user.hello(); // hello leo  => fun() 外部函数是 hello


// 改变 this 的指向

// 使用 ES6 的箭头函数
// 在函数内部使用 _this = this
// 使用 apply、call、bind
// new 实例化一个对象

// 把 this 值绑定到另一个环境中，就可以使用 call / apply / bind 方法实现：
var user = { name: 'leo' };
var name = 'pingan';
function fun(){
    return console.log(this.name); // this 的值取决于函数调用方式
}

fun();           // "pingan"
fun.call(user);  // "leo"
fun.apply(user); // "leo"
