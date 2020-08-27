// 函数调用的方法一共有 4 种

// 1.作为一个函数调用, 函数调用a()是全局调用，window.a()
var name = "windowsName";
function a() {
    var name = "Cherry";

    console.log(this.name);          // windowsName

    console.log("inner:" + this);    // inner: Window
}
a();



// 2.函数作为方法调用,a.fn(),this 永远指向最后调用它的那个对象
var name = "windowsName";
var a = {
    name: "Cherry",
    fn : function () {
        console.log(this.name);      // Cherry
    }
}
a.fn();




// 3.使用构造函数调用函数
// 构造函数:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

// This    creates a new object
var a = new myFunction("Li","Cherry");
a.lastName;       // 返回 "Cherry"







// 4.作为函数方法调用函数（call、apply）