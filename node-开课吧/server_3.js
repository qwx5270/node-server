const http = require('http');
const urlLib = require('url');

http.createServer(function (req, res) {
  var obj = urlLib.parse(req.url, true);

  var url = obj.pathname;
  var GET = obj.query;

  console.log(url, GET);

  res.end();
}).listen(3001);


//  GET 数据解析  三种方法
//    1.  自己分割(切)
//    2.  通过querystring     只能解析数据的部分  xx=xxx&xxx=xxxx
//    3.  使用url             解析整个url   aaa?xx=xxx&xxx=xxxxx
