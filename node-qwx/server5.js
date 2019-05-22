const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();
server.listen(1008);

// server.use(cookieParser());
server.use(cookieParser('qwxqwj199808'));

server.use('/abc/a.html', function (req, res) {
//  console.log(req.cookies);                 //cookies  访问底下级

//  res.cookie('user', 'qwx', {path: '/abc', maxAge: 5*60*1000});     maxAge  过期时间  已毫秒为单位

  req.secret = 'qwxqwj199808';      // 签名的密钥   防止篡改
  res.cookie('user', 'zbc', {signed: true});

  console.log('签名的cookie: ', req.signedCookies)
  console.log('无签名的cookie: ', req.cookies);

  // 删除cookie
  //res.clearCookie(user);

  res.send("it' ok!");
})


// 在 终端 node下用     签名的密钥 s%3Azbc.Gp8XqmBdGqMfAPooXix3KXTeBcR7IqTGFe73QEUU9xc
//解析 decodeURIComponent('s%3Azbc.Gp8XqmBdGqMfAPooXix3KXTeBcR7IqTGFe73QEUU9xc')

//cookie:       req.signedCookies
//cookie空间非常小   --- 必须省着用       --- 安全性很差


// cookie 加密  在npm 上找 cookie-encrypter
