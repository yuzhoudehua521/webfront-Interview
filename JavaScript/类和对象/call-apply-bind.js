// A对象有个方法，B对象因为某种原因也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，
// 还是借用一下 A 对象的方法呢？当然是借用 A 对象的方法啦，既达到了目的，又节省了内存。
// 这就是call/apply/bind的核心理念：借用方法。借助已实现的方法，改变方法中数据的this指向，减少重复代码，节省内存。
// call的作用，1调用函数，2改变this指向
// call()、apply()、bind()，这三个函数的第一个参数都是this的指向对象，第二个参数差别就来了：
// call(obj,'a','b'), apply(obj, ['a','b']), bind(obj,'a','b')()


// call和apply的应用场景：
// 这些应用场景，多加体会就可以发现它们的理念都是：借用方法

function isType(data, type) {
    const typeObj = {
        '[object String]': 'string',
        '[object Number]': 'number',
        '[object Boolean]': 'boolean',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined',
        '[object Object]': 'object',
        '[object Array]': 'array',
        '[object Function]': 'function',
        '[object Date]': 'date', // Object.prototype.toString.call(new Date())
        '[object RegExp]': 'regExp',
        '[object Map]': 'map',
        '[object Set]': 'set',
        '[object HTMLDivElement]': 'dom', // document.querySelector('#app')
        '[object WeakMap]': 'weakMap',
        '[object Window]': 'window',  // Object.prototype.toString.call(window)
        '[object Error]': 'error', // new Error('1')
        '[object Arguments]': 'arguments',
    }
    let name = Object.prototype.toString.call(data) // 借用Object.prototype.toString()获取数据类型
    let typeName = typeObj[name] || '未知类型' // 匹配数据类型
    return typeName === type // 判断该数据类型是否为传入的类型
}
console.log(
    isType({}, 'object'), // true
    isType([], 'array'), // true
    isType(new Date(), 'object'), // false
    isType(new Date(), 'date'), // true
)


// 类数组借用数组的方法：
// 类数组因为不是真正的数组所有没有数组类型上自带的种种方法，所以我们需要去借用数组的方法。比如借用数组的push方法：
var arrayLike = {
    0: 'OB',
    1: 'Koro1',
    length: 2
  }
Array.prototype.push.call(arrayLike, '添加元素1', '添加元素2');
console.log(arrayLike) // {"0":"OB","1":"Koro1","2":"添加元素1","3":"添加元素2","length":4}




// 手写call/apply、bind

// 手写实现一个call
Function.prototype.myCall = function (context, ...arr) {
    if (context === null || context === undefined) {
       // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
        context = window 
    } else {
        context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
    context.testFn = this; // 函数的this指向隐式绑定到context上
    let result = context.testFn(...arr); // 通过隐式绑定执行函数并传递参数
    delete context.testFn; // 删除上下文对象的属性
    return result; // 返回函数执行结果
};


// 实现一个apply
Function.prototype.myApply = function (context) {
    if (context === null || context === undefined) {
        context = window // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    } else {
        context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
    // JavaScript权威指南判断是否为类数组对象
    function isArrayLike(o) {
        if (o &&                                    // o不是null、undefined等
            typeof o === 'object' &&                // o是对象
            isFinite(o.length) &&                   // o.length是有限数值
            o.length >= 0 &&                        // o.length为非负值
            o.length === Math.floor(o.length) &&    // o.length是整数
            o.length < 4294967296)                  // o.length < 2^32
            return true
        else
            return false
    }
    context.testFn = this; // 隐式绑定this指向到context上
    const args = arguments[1]; // 获取参数数组
    let result
    // 处理传进来的第二个参数
    if (args) {
        // 是否传递第二个参数
        if (!Array.isArray(args) && !isArrayLike(args)) {
            throw new TypeError('myApply 第二个参数不为数组并且不为类数组对象抛出错误');
        } else {
            args = Array.from(args) // 转为数组
            result = context.testFn(...args); // 执行函数并展开数组，传递函数参数
        }
    } else {
        result = context.testFn(); // 执行函数
    }
    delete context.testFn; // 删除上下文对象的属性
    return result; // 返回函数执行结果
};



// 手写实现一个bind
Function.prototype.myBind = function (objThis, ...params) {
    const thisFn = this; // 存储源函数以及上方的params(函数参数)
    let fToBind = function () {
        const isNew = this instanceof fToBind // this是否是fToBind的实例 也就是返回的fToBind是否通过new调用
        const context = isNew ? this : Object(objThis) // new调用就绑定到this上,否则就绑定到传入的objThis上
        return thisFn.apply(context, params); // 用apply调用源函数绑定this的指向并传递参数,返回执行结果
    };
    fToBind.prototype = Object.create(thisFn.prototype); // 复制源函数的prototype给fToBind
    return fToBind; // 返回拷贝的函数
};





















