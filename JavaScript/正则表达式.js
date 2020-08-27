// 创建正则表达式
var regexp = new RegExp(/123/)

var reg = /123/

// 验证正则表达式
reg.test('123')


// 边界符 开始：^。 结尾：$


//字符类， [] 提供一系列选择，只要匹配其中一个就可以， /^[a-zA-Z0-9]$/ 任选一个
//[^a-z]， []里面有^表示不能有
//{3,16} 匹配多少数量
//（abc）优先匹配
 

// 写一个function，清除字符串前后的空格。（兼容所有浏览器）
function trim(str) {
    if (str && typeof str === "string") {
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
    }
}


// 使用正则表达式验证邮箱格式
 var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/
 var email = "example@qq.com"
 console.log(reg.test(email))
