const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const expressRoute = require('express-route');
const qiniu = require('qiniu');

const multerObj = multer({dest: './static/upload'})

var server = express();
server.listen(9099, function () {
	console.log('listening port 9099');
});

//定义好其中鉴权对象mac
//var accessKey = '4cRDNSXWUkHn3-DrZicWLpKFsnU5izaEJVhNiKsz';
//var secretKey = 'EVLddyPraEYyqOxY-M4YeyMlNgXrjYtdteJPTbq0';
//var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

//var keyToOverwrite = 'qiniu.mp4';      覆盖的文件名称

//简单上传的凭证
// var options = {
//   scope: solo-qwx,
//   //scope: bucket + ":" +keyToOverwrite,
//   callbackUrl: 'http://api.example.com/qiniu/upload/callback',
//   expires: 7200,         自定义凭证有效期   单位为秒，为上传凭证的有效时间
//
//   returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"solo-qwx":"$(solo-qwx)","name":"$(x:name)"}',   //自定义这个返回的JSON格式的内容
//   callbackBodyType: 'application/json'
// };
// var putPolicy = new qiniu.rs.PutPolicy(options);
// var uploadToken=putPolicy.uploadToken(mac);


// 1.获取请求数据
server.use(bodyParser.urlencoded());
server.use(multerObj.any());

// 2.cookie、 session
server.use(cookieParser());

(function () {
  var keys = [];
  for(var i=0; i<100000; i++) {
    keys[i] = 'qwx_' +Math.random();
  }

  server.use(cookieSession({
    name: 'sess_id',
    keys: keys,
    maxAge: 20*60*1000
  }));
})();

// 3.模板
server.engine('html', consolidate.ejs);
server.set('views', 'template');
server.set('view engine', 'html');

// 4.route

// var createRouter = require('./route/1.js');
// server.use('/article/', createRouter());

//server.use('/article/', require('./route/1.js')());

server.use('/', require('./route/web')());
server.use('/admin/', require('./route/admin')());

// 5.default: static
server.use(static('./static'));
