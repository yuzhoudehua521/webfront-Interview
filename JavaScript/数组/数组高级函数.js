const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
  'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
  'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
  'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
  'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
  'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert',
  'Blair, Tony', 'Blake, William'
]

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car',
  'truck', 'pogostick'
]


// filter创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
const fifteen = inventors.filter(key => (key.year >= 1500 && key.year <1600))
// console.table(fifteen)
console.log(fifteen)


// map 形象的理解就是，把数组中的每个元素进行处理后，返回一个新的数组
const fullName = inventors.map(key => `${key.first}${key.last}`)
console.log(fullName)


// Array.prototype.sort() 会将数组以字符串的形式进行升序排列


// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// reduce() 可以作为一个高阶函数，用于函数的 compose。
// reducer 函数接收4个参数:
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
// 4. 计算所有的发明家加起来一共活了多少岁
var total = 0
const totalYears = inventors.reduce((total, value) => {
    // console.log(index)
    return total + (value.passed - value.year);
}, 0)
console.log(totalYears)


// 5. 按照他们活了多久来进行排序
//sort返回 一个小于零的值，数组将按照升序排列，该函数要比较两个值
const oldest = inventors.sort((a, b) => {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);



// map、filter结合使用筛选出网页中含有CSS标题的数据名称
// querySelectorAll() 获取到的是一个 NodeList ，它并非是 Array 类型的数据，
// 所以并不具有 map 和 filter 这样的方法，所以如果要进行筛选操作则需要把它转化成 Array 类型，
// 使用下面示例之中的 Array.from() 来转化
// const category = document.querySelectorAll('.subject-list h2 a');
// const links = Array.from(category);
// const CSS_BOOK = links.map(link => link.textContent).filter(streetName => streetName.includes('CSS'));



// 统计给出数组中各个物品的数量
const transportation = data.reduce( (obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
 }, {});
 
 console.log(transportation);






 const people1 = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];



// 在此两数组的基础上实现一下几个操作：
// 是否至少有一人年满19周岁？
// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
const isAdult = people1.some(function(person){
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  if(currentYear - person.year >= 19){
    return true;
  }
});
console.log(isAdult);






// 是否每一个人都年满19周岁？
// element：当前在操作的对象。index：当前操作对象的索引。array：在操作的数组指针。
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
const everyAdult = people1.every(person => (new Date().getFullYear() - person.year) >= 19);
console.log(everyAdult);






// 是否存在id=823423的评论？
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const findComment = comments.find(value => value.id === 823423)
console.log(findComment)


// 找到id=823423的评论的序列号(下标)。
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
const findCommentIndex = comments.findIndex(comment => comment.id === 823423)
console.log(findCommentIndex)


// 删除id=823423的评论。
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝,原始数组不会被改变。
comments.splice(findCommentIndex,1);


// 在索引2的位置移除0个元素，并且插入"drum"
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
// myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"] 


// 从索引3开始移除1个元素。
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// myFish 为 ["angel", "clown", "drum", "sturgeon"]


// 从索引2移除一个元素，并且插入"trumpet"
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');
// myFish 为 ["angel", "clown", "trumpet", "sturgeon"]


// 从索引0开始移除2个元素，并且插入"parrot", "anemone" 和 "blue"。
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish为 ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 


// 从索引2开始移除所有元素
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);
// myFish 为 ["angel", "clown"] 












 



