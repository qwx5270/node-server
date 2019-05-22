const mysql = require('mysql');

// 1.连接
//createConnection(哪台服务器, 用户名, 密码, 操作哪个数据库)
var db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '19980808qwx',
  database: 'qwx'
});

//console.log(db);

//2. 查询
//query(做什么, 回调)
db.query("SELECT * FROM `usertable`", (err, data) => {
  if(err) {
    console.log('出错了', err);
  } else {
    console.log('操作成功', data);
    console.log(JSON.stringify(data));
  }
});



//服务端
//客户端:  node的mysql模块

//1. 连接到服务器
//2.发送请求(查询)

//SQL标准写法:
//1.  关键字都是大写
//2.  库、表、字段须加上" `` "

//SQL  结构化查询语句
//四大查询语句   ----- 增加、 删除、 修改、 查找

//增加 --- insert
//INSERT INTO 表名 (字段列表) VALUES(值列表)
//INSERT INTO `userTable` (`ID`, `username`, `pass`) VALUES(0, 'qwj', '654321')

//删除 --- delete

//修改 --- update
//SELECT 什么 FROM 表
//SELECT * FROM `userTable`;

//查找 --- select

//  子句之间是有顺序的
//  WHERE GROUP ORDER LIMIT
