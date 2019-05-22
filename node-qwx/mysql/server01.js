const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');     //文件上传
const consolidate = require('consolidate');
const mysql = require('mysql');

// 连接池
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '19980808qwx',
  database: 'blog'
});

var server = express();
server.listen(3038, function () {
	console.log('listening port 3038');
});

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

//4. 配置模板引擎:      用的是哪种模板引擎    模板文件放在哪       输出什么文件
//输出什么文件
server.set('view engine', 'html');

//模板文件放在哪
server.set('views', './template');

//用的是哪种模板引擎
server.engine('html', consolidate.ejs);

//接收用户请求
server.get('/',  (req, res, next) => {
  //查询banner里的数据
  db.query("SELECT * FROM banner_table", (err, data)=> {
    if(err) {
      console.log(err);
      //res.send('出错了').end();  效果不好
      res.status(500).send('database error').end();
    } else {
      //console.log(data);
      res.banners=data;

      next();

    }
  });

});
server.get('/', function (req, res, next) {
    //查询news里的数据
//  console.log(res.banners);
  db.query("SELECT ID,summery,title FROM article_table", (err, data) => {
    if(err) {
      res.status(500).send('database error').end();
    } else {
      res.articles = data;
      console.log(data);
      next();
    }
  });

});

server.get('/', (req, res) => {
  res.render('console.ejs', {banners: res.banners, articles: res.articles});
});

server.get('/article', (req, res) => {

  if(req.query.id) {
    if(req.query.act == 'like') {
      db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`, (err) => {
        if(err) {
          res.status(500).send('赞 数据有问题').end();
        }
      });

      db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err, data) => {
        if(err) {
          res.status(500).send('数据有问题').end();
        } else {
          if(data.length == 0) {
            res.status(404).send('请求的东西找不到').end();
          } else {
            var articleData = data[0];

            var oDate = new Date();
            articleData.post_time = oDate.setTime(articleData.post_time*1000);

            articleData.content = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
            console.log(data);
            res.render('homePage.ejs', {
              article_data: articleData
            })
          }
        }
      })
    } else {
      db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err, data) => {
        if(err) {
          res.status(500).send('数据有问题').end();
        } else {
          if(data.length == 0) {
            res.status(404).send('请求的东西找不到').end();
          } else {
            var articleData = data[0];

            var oDate = new Date();
            articleData.post_time = oDate.setTime(articleData.post_time*1000);
            articleData.content = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
            console.log(data);
            res.render('homePage.ejs', {
              article_data: articleData
            })
          }
        }
      })
    }

  } else {
    res.status(404).send('请求的东西找不到!!!').end();
  }

})

//5. static数据
server.use(static('./www/src/'));
