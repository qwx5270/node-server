const express = require('express');
const common = require('../../libs/common');
const mysql = require('mysql');

var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '19980808qwxqwj',
  database: 'learner'
});

module.exports = function () {
  var router = express.Router();

  router.get('/', (req, res)=> {
    res.render('admin/login.ejs', {});
  });

  router.post('/', (req, res)=> {
    //res.send('admin页面').end();
    //console.log(req.body);

    var username = req.body.username;
    var password = common.md5(req.body.password + common.MD5_SUFFIX);
    //console.log(password);
    db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data)=> {
      if(err) {
        console.error(err);
        req.status(500).send('database error').end();
      } else {
        if(data.length == 0) {
          res.status(403).send('该用户不存在').end();
        } else {
          console.log(data[0].password);
          if(data[0].password == password) {
            //成功
            req.session['admin_id'] = data[0].ID;
            res.redirect('/admin/');
          } else {
            res.status(404).send('this password is incorrect');
          }
        }
      }
    });
  });

  return router;
}
