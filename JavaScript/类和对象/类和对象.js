// js通过构造函数实现类和对象
// class 为 构造函数的语法糖，即 class 的本质是构造函数。class的继承 extends  本质 为构造函数的原型链的继承。
class Student {
    constructor(uname, age, sex) {
        this.uname = uname;
        this.age = age;
        this.sex = sex;
    }
    sing() {
        console.log(this.uname + '喜欢唱歌')
    }
}

// 构造函数实现class
function StudentClass(uname, age, sex) {
    if(!(this instanceof StudentClass)) {
        return new Error('请使用 new StudentClass')
    }
    this.uname = uname;
    this.age = age;
    this.sex = sex;
    StudentClass.prototype.sing = function() {
        console.log(this.uname + '喜欢唱歌')
    }
}

const myStudent = new StudentClass('老铁', 22, '男')
myStudent.sing()   //老铁喜欢唱歌
console.log(myStudent.age)    //22



class Student1 extends Student {
    constructor(uname, age, sex) {
        super(uname, age, sex);
        this.uname = uname;
        this.age = age;
        this.sex = sex;
    }
    say() {
        console.log(super.sing() + '和跳舞')
    }
    doing() {
        console.log(this.uname + '今年' + this.age + '岁了，性别为' + this.sex)
    }
}

var xming = new Student1('小明', 20, '男')

console.log(xming.uname)
xming.sing()
xming.doing()


// 1，es6中类没有变量提升，必须先定义类，才能实例化对象
// 2，类里面的共有属性和方法一定要加this