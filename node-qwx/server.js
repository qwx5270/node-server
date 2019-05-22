//express保留了原生的功能, 自己添加了一些方法(send), 增强了原有的功能
const express = require('express');

var server = express();

server.use('/a.html', function (req, res) {
  // res.send('qwx');     或  res.write('qwx');
  res.send({a: 13, b: 'qwx'});     // res.write 挂掉
  res.end();
});
server.use('/b.html', function (req, res) {
  res.send('zbc');
  res.end();
});

server.listen(8080);


//1.创建服务
//var server = express();

//2.监听
//server.listen(8080);

//3.处理请求
//server.use('地址', function (req, res) {

//})

/* 3种方式接收到用户的请求
server.get('/', function (req, res) {
  console.log('get方式');
});

server.post('/', function (req, res) {
  console.log('post方式');
});

server.use('/', function (req, res) {
  console.log('use方式(post、get都包含)');
})
*/
