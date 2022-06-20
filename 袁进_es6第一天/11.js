/**
 * 将传入的数据转换为 JSON 格式的字符串
 * @param {any} data 要转换的数据
 * @returns {String} 返回转换后的 JSON 字符串
 */
function toJSON(data) {
  // code here
}

// test
toJSON(''); // -> ""
toJSON('abc'); // -> "abc"
toJSON(123); // -> 123
toJSON({ a: 1, b: 2 }); // -> {"a":1, "b":2}
toJSON(['1', 3, { name: 'monica', age: 18 }]); //-> ["1", 3, {"name":"monica", "age":18}]
