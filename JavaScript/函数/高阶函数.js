//高阶函数是对其他函数进行操作的函数，接受函数作为参数，或把函数作为返回值

// 1.回调函数
function fn(a, b, callback) {
    console.log(a + b)
    callback && callback()
}

fn(1, 4, function() {
    setTimeout(function() {
        console.log('这是回调函数')
    }, 6000)
})


// 闭包 closure, 一个函数访问另一个函数作用域的变量， 作用于隐藏变量, 延伸了变量的作用范围
function fn1() {
    const num = 99
    return function() {
        console.log(num)
    }
}

var f = fn1()
f()


