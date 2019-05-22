//基本的服务器       nodejs 当作服务器来使用的
//作为一台有追求的服务器       我现在所做的远远是不够的

const http = require('http');        // http 既是协议也是模块  require 引入

//回调函数
var server = http.createServer(function (req, res) {       //request 请求  输入-请求的信息  response 响应  输出-输出的数据
  //console.log('有人来访问了');
  console.log(req.url);
  switch(req.url) {
    case '/1.js':
      res.write('11111');
      break;
    case '/2.js':
      res.write('22222');
      break;
    default:
      res.write('404');
      break;
  }

//  res.write("abcdef 555");       //往前台输出东西
  res.end();                       //结束

});

//监听    -- 等着外部访问
//端口      --数字
server.listen(8088);            //    http://localhost:端口/
