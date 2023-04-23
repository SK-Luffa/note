# mysql数据驱动

## 什么是驱动程序 
驱动程序是连接内存和其他存储介质的桥梁

mysql 驱动是连接内存数据和mysql数据的桥梁

mysql程序通常使用 mysql  mysql2

 
### mysql2的使用 

```js
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
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err, results, fields) {
        console.log(results); // 结果集
        console.log(fields); // 额外的元数据（如果有的话）
    }
);

// 使用占位符
connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45],
    function (err, results) {
        console.log(results);
    }
);

//断开链接
connection.end()

```



# 创建链接可以用 异步的方式

const mysql = require('mysql2/promise');

```js
// get the client
const mysql = require('mysql2/promise');

// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');

// create the connection, specify bluebird as Promise
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test', Promise: bluebird});

// query database
const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);

```

以上不建议使用

原因是防止sql注入

* sql注入：用户通过注入sql语句到最终查询中，导致了整个sql与预期行为不符


# mysql支持变量 变量的内容不作为任何sql的关键字

改query为execute

const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]); 

变量['Morty', 14]会填充到“？”之处


# 创建一个连接池

```js
const connection = mysql.createPoo l({
    host: '114.116.214.98',
    user: 'root',
    password:'SK8sigua$',
    database: 'cese'//数据库名称
});
```


"%?%" 模糊查询这个写法是错误的，正确的是：concat('%',?,'%')

