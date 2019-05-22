const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(1010);

server.use(bodyParser.urlencoded({
  extended: true,          //扩张模式
  limit:  2*1024*1024      //限制    默认 100k
}));

/*server.use('/', function (req, res) {
   // console.log(req.query)    GET 数据    无需中间件
   console.log(req.body);      //POST      需要"body-parser"

});  */

//链式操作:

server.use('/', function (req, res, next) {
  console.log('aaa');

  next();
});

server.use('/', function (req, res, next) {
  console.log('bbb');
})
