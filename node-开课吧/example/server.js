const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');


var users = {};      // {"qwx": "123456", "zbc": "123456", "qwj": "12345678". .......} 关闭服务器数据全丢失

var server = http.createServer(function (req, res) {
  //解析数据
  var str = '';

  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {
    var obj = urlLib.parse(req.url, true);
    const url = obj.pathname;
    const GET = obj.query;
    const POST = querystring.parse(str);

  //区分接口 与 文件
  if(url == '/user') {        //接口访问
    switch(GET.act) {
      case 'reg':
        //1.检查用户名是否已经存在了
        if(users[GET.user]) {
          res.write('{"ok": false, "msg": "用户已经存在"}');
        } else {
          //2. 插入到users
           users[GET.user] = GET.pass;
           res.write('{"ok": true, "msg": "你已注册成功"}');
        }
        break;
      case 'login':
        //1.检查用户是否已经存在
        if(users[GET.user] == null) {
          res.write('{"ok": false, "msg": "用户名不存在"}');
        } else if (users[GET.user] != GET.pass){        //2.检查密码是否正确
          res.write('{"ok": false, "msg": "用户名或密码不正确"}')
        } else {
          res.write('{"ok": true, "msg": "登录成功!!!"}');
        }
		console.log()
        break;
      default:
        res.write('{"ok": false, "msg": "未知的请求(act)"}')
    }
    res.end();
  } else {                    //文件读取
    //读取文件
    console.log(url);
    var file_name = './www' +url;

    console.log(file_name);

    fs.readFile(file_name, function (err, data) {
      if(err) {
        console.log(err);
        res.write('404');
      } else {
        res.write(data);
      }
      res.end();
      });
    }
  });
});

server.listen(5063);
