// 八大数据类型
// 前七种为基本数据类型，也称为原始类型（值本身无法被改变），而 object 为复杂数据类型。
// 八大数据类型分别是：

// number 用于任何类型的数字：整数或浮点数，在 ±2 范围内的整数。
// bigint 用于任意长度的整数。
// string 用于字符串：一个字符串可以包含一个或多个字符，所以没有单独的单字符类型。
// boolean 用于 true 和 false。
// null 用于未知的值 —— 只有一个 null 值的独立类型。
// undefined 用于未定义的值 —— 只有一个 undefined 值的独立类型。
// symbol 用于唯一的标识符。
// object 用于更复杂的数据结构。

// 基本数据类型赋值
// 在栈内存中的数据发生数据变化的时候，系统会自动为新的变量分配一个新的之值在栈内存中，两个变量相互独立，互不影响的。
// 基本类型值在内存中占据固定大小，保存在栈内存中（不包含闭包中的变量）。 
// 常见包括：undefined,null,Boolean,String,Number,Symbol



// 用数据类型赋值
// 在 JavaScript 中，变量不存储对象本身，而是存储其“内存中的地址”，换句话说就是存储对其的“引用”。 
// 引用类型的值是对象，保存在堆内存中。而栈内存存储的是对象的变量标识符以及对象在堆内存中的存储地址(引用)，
// 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，
// 取得地址后从堆中获得实体。常见包括：Object,Array,Date,Function,RegExp等


// let 允许你声明一个作用域被限制在块级中的变量、语句或者表达式
//     let绑定不受变量提升的约束，这意味着let声明不会被提升到当前
//     该变量处于从块开始到初始化处理的“暂存死区”。

// var 声明变量的作用域限制在其声明位置的上下文中，而非声明变量总是全局的
//     由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明
    
// const 声明创建一个值的只读引用 (即指针)
//     这里就要介绍下 JS 常用类型 
//     String、Number、Boolean、Array、Object、Null、Undefined
//     其中基本类型 有 Undefined、Null、Boolean、Number、String，保存在栈中；
//     复合类型 有 Array、Object ，保存在堆中；
    
//     基本数据当值发生改变时，那么其对应的指针也将发生改变，故造成 const申明基本数据类型时，
//     再将其值改变时，将会造成报错， 例如 const a = 3 ; a = 5 时 将会报错；
//     但是如果是复合类型时，如果只改变复合类型的其中某个Value项时， 将还是正常使用；

// typeof 用于原始类型
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string



// instanceof 可以正确的判断对象的类型，
// 因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true












