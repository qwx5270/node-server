const express = require('express');
const expressStatic = require('express-static');
var server = express();

server.listen(5555);

var users = {
  'qwx': '12345',
  'zbc': '123456',
  'xxx': '111111'
};

server.get('/login', function (req, res) {
  // console.log(req.query);   GET
  //console.log(req.body);     POST

  var user = req.query['user'];
  var pass = req.query['pass'];

  if(users[user] == null) {
    res.send({ok: false, msg: '该用户不存在'});
  } else if(users[user] !== pass){
    res.send({ok: false, msg: '用户名密码错误'});
  } else {
    res.send({ok: true, msg: '成功!!!'})
  }
});

server.use(expressStatic('./www'));
