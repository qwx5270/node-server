//接受数据请求   前台--> form 、 Ajax、 jsonp       后台--> 都是一样
//   前台 <--> 后台  交互    都是通过HTTP协议
//请求的方式不同  过来的接收方式不一样   GET 数据在URL中一起传输的    POST   数据不在URL中一起传输的

const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {
  console.log(req.url, '\n\n')
  //console.log(req.url);
  var GET = {};

  // if(req.url.indexOf('?')!=-1) {
  //   var arr = req.url.split('?');
  //   //arr[0] => 地址 '/aaa'     arr[1] => 数据 'user=xxxx&pass="123456'
  //   var url = arr[0];
  //
  //   var arr2 = arr[1].split('&');
  //   //arr2 => ['user=blue', 'pass=123456']
  //
  //   for(var i=0; i<arr2.length; i++) {
  //     var arr3 = arr2[i].split('=');
  //     //arr3[0] => 名字   'user'
  //     //arr[1] => 数据  'xxxx'
  //     GET[arr3[0]] = arr3[1];
  //   }
  // } else {
  //   var url = req.url;
  // }

  if(req.url.indexOf('?')!=-1) {
    var arr = req.url.split('?');
    var url = arr[0];

    GET =querystring.parse(arr[1]);

  } else {
    var url = req.url;
  }


  console.log(url, GET);

  //req 获取前台请求数据
  res.write('abcd');

  res.end();
}).listen(1234);


//  req.url => "/aaa?user=xxxx&pass="123456       /aaa  请求的地址       user=xxxx&pass="123456 数据
