// const http = require('http')
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

//异步 -- 多个操作可以同时进行,前一次的操作没完成,后一次也能进行
//同步 -- 一次一个
