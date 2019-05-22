const express = require('express');

var server = express();

//创建router
var routerUser = express.Router();          //http://localhost:5555/user/
//目录1: /user/

routerUser.get('/1.html', function (req, res) {     //http://localhost:5555/user/1.html
  res.send('user111111');
});
routerUser.get('/2.html', function (req, res) {
  res.send('user2222222');
})

// 把router添加到server
server.use('/user', routerUser);

//目录2: /article
var routerArticle = express.Router();
server.use('/article', routerArticle);

routerArticle.get('/a.html', function (req, res) {
  res.send('这是a.html')
});
routerArticle.get('/b.html', function (req, res) {
  res.send('这是b.html');
});

server.listen(5555);

//Router     ---  子服务
