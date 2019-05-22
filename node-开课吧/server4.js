const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {
  //POST 数据也是从req过来的

  var str = '';        //接受数据  ？？

  var i = 0;
  //data —— 有一段数据到达就发送一次(可以发送很多次)
  req.on('data', function (data) {
    console.log(`第${i++}次收到数据`);       //es6语法
    str+=data;
  });

  //end ——  数据全部发送完毕(一次)
  res.end('end', function () {
    //console.log(str);
    var POST = querystring.parse(str);
    console.log(POST);
  })

}).listen(3005);

// POST数据接收: POST数据比GET大得多

//POST 很大 ———— 分段 发送的  而不是整个发送出去的
