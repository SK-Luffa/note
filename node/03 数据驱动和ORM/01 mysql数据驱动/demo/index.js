// 导入模块
const mysql = require('mysql2');

// 创建一个数据库连接
const connection = mysql.createConnection({
    host: '114.116.214.98',
    user: 'root',
    password:'SK8sigua$',
    database: 'cese'//数据库名称
});

// 简单查询
connection.execute(
    'SELECT * FROM `indexs` where name=?',
    function (err, results){
        console.log(results); // 结果集
        // console.log(fields); // 额外的元数据（如果有的话）
    }
);

connection.end()
// 使用占位符
// connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function (err, results) {
//         console.log(results);
//     }
// );