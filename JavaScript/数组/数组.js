// Array相关的属性和方法

// Array 对象属性
// constructor 返回对创建此对象的数组函数的引用。
// length 设置或返回数组中元素的数目。
// prototype 使您有能力向对象添加属性和方法。


// Array 对象方法
// concat() 连接两个或更多的数组，并返回结果。
// join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
// pop() 删除并返回数组的最后一个元素。
// shift() 删除并返回数组的第一个元素
// push() 向数组的末尾添加一个或更多元素，并返回新的长度。
// unshift() 向数组的开头添加一个或更多元素，并返回新的长度。
// reverse() 颠倒数组中元素的顺序。
// slice() 从某个已有的数组返回选定的元素
// sort() 对数组的元素进行排序
// splice() 删除元素，并向数组添加新元素。
// toSource() 返回该对象的源代码。
// toString() 把数组转换为字符串，并返回结果。
// toLocaleString() 把数组转换为本地数组，并返回结果。
// valueOf() 返回数组对象的原始值
// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。



// 数组去重

// 方法一：
var arr = [0,2,3,4,4,0,2];
var obj = {};
var tmp = [];
for(var i = 0 ;i< arr.length;i++){
   if( !obj[arr[i]] ){
      obj[arr[i]] = 1;
      tmp.push(arr[i]);
   }
}
console.log(tmp)


// 方法二：
var a = ['a', 'b', 'c', 'd', 'a', 'b', 'k']
function unique(arr) {
    var newArr = []
    for(var i=0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }      
    }
    return newArr
}
var demo = unique(a)
console.log(demo)


// 方法三：
var arr = [2,3,4,4,5,2,3,6];
var arr2 = arr.filter(function(value,index,self){
    return self.indexOf(value) === index;
})
console.log(arr2)







// 数组方法
// 1.forEach迭代数组
var arr = [1,2,34,5,4,66]
var sum = 0
arr.forEach(function(value, index, array) {
    console.log('每个数组元素' + value)
    console.log('每个数组元素索引号' + index)
    console.log('数组本身' + array)
    sum += value
})


// 2.map 通过指定函数对数组进行处理，并将处理后的结果以新数组的形式返回
let arr1 = [1,2,6,3,4,5]
let res = arr1.map(
    function(value,index,arr){
        return value+1
    }
)
console.log(res)

// 3.filter 筛选满足条件返回新的数组
let arr2 = [1,2,6,3,4,5]
let res1 = arr2.filter(
    function(value,index,arr){
        return value % 2 === 0
    }
)
console.log(res1)


// 4.some 查找数组是否存在某个条件元素，返回值为布尔值
let arr3 = [1,2,6,3,4,5]
let res2 = arr3.some(
    function(value,index,arr){
        return value % 2 === 0
    }
)
console.log(res2)