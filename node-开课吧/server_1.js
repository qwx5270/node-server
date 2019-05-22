const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
  //req.url => '/index.html'
  //读取 => './www/index.html'
  //  './www' + req.url

  var file_name = './www' + req.url;

  fs.readFile(file_name, function (err, data) {       //异步操作
    if(err) {
    //  console.log('bbbbbb');
      res.write('404');
    } else {// const http = require('http')
const fs = require('fs');       //fs       File System 文件操作

//readFile(文件名, 回调函数);     读文件
fs.readFile('a1.txt', function(err, data) {
  //console.log(err);

  if(err) {
    console.log('读取失败');
    } else {
       // console.log(data);   读取的原始    Buffer 二进制数
       console.log(data.toString());
      }
});

//writeFile(文件名, 内容, 回调函数)     写文件
fs.writeFile("b.txt", "abcdefewrewrf", function (err) {
  console.log(err);
});

    //  console.log('aaaaaaa');
      res.write(data);
    }
    res.end();
  });
//  console.log('ccccc');      //异步操作
//  res.end();
});

server.listen(8801);
