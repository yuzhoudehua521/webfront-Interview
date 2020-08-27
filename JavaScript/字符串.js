// js 字符串操作函数
// concat() – 将两个或多个字符的文本组合起来，返回一个新的字符串。
// indexOf() – 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1 。
// charAt() – 返回指定位置的字符。
// lastIndexOf() – 返回字符串中一个子串最后一处出现的索引，如果没有匹配项，返回 -1 。
// match() – 检查一个字符串是否匹配一个正则表达式。
// substr() 函数 -- 返回从string的startPos位置，长度为length的字符串
// substring() – 返回字符串的一个子串。传入参数是起始位置和结束位置。
// slice() – 提取字符串的一部分，并返回一个新字符串。
// replace() – 用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串。
// search() – 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 
// split() – 通过将字符串划分成子串，将一个字符串做成一个字符串数组。
// length – 返回字符串的长度，所谓字符串的长度是指其包含的字符的个数。
// toLowerCase() – 将整个字符串转成小写字母。
// toUpperCase() – 将整个字符串转成大写字母。










var str = 'abcddfxykmuuuttodfdd'

var index = str.indexOf('d')
var num = 0

while(index !== -1) {
    console.log(index)
    num++
    index = str.indexOf('d', index + 1)
}

console.log('出现次数为：' + num)


// 判断出现次数最多字符
var str = 'abcddfxykmuuuttodfdd'

var o = {}

for(var i = 0; i < str.length; i++) {
    var chars = str.charAt(i)   //取出字符串
    if(o[chars]) {
        o[chars]++
    }else {
        o[chars] = 1
    }
}

var max = 0
var char = ''

for(var k in o) {
    if(o[k] > max) {
        max = o[k]
        char = k
    }
}

console.log('最多字符是：' + char + ', 一共有：' + max + '个。')




// 替换所有字符串
var str = 'abcddfxykmuuuttodfdd'

while(str.indexOf('d') !== -1) {
    str = str.replace('d', "*")
}

console.log(str)


// 去除字符串两端空白字符,返回新的字符串
str.trim()

