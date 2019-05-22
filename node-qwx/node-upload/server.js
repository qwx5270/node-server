const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');     //文件上传
const consolidate = require('consolidate');      // 适配模块   使用这个就不需要去引jade, ejs等模板引擎
// const jade = require('jade');    不需要引了
// const ejs = require('ejs');      不需要引了


var server = express();
server.listen(3033);

//1. 解析cookie
server.use(cookieParser('regfdwsgre43fdgdq'));

//2. 使用session
var arr = [];
for(var i=0; i<100000; i++) {
  arr.push('keys_' +Math.random());
}
server.use(cookieSession({name: 'name_id', keys: arr, MaxAge: 20*3600*1000}));

//3. Post 数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());

//用户请求
// server.use('/', function (req, res, next) {
//   console.log(req.query, req.body, req.files, req.cookies, req.session)
// })

//4. 配置模板引擎:      用的是哪种模板引擎    模板文件放在哪       输出什么文件
//输出什么文件
server.set('view engine', 'html');

//模板文件放在哪
server.set('views', './views');

//用的是哪种模板引擎
server.engine('html', consolidate.ejs);

//接收用户请求
server.get('/index', function (req, res) {
  res.render('1.ejs', {food: '只要是好吃的都喜欢'});

  // if(req.session.name_id) {      登录过
  //   res.render('1.ejs', {food: '只要是好吃的都喜欢'});
  // } else {                       没登陆
  //   res.render('login.ejs', {});
  // }

})

//5. static数据
server.use(static('./www'));

//  route --- 路由      把不同的目录 对应不同的模块
