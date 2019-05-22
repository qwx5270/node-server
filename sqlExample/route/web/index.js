const express = require('express');
const mysql = require('mysql');

var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '19980808qwxqwj',
  database: 'learner'
});

module.exports = function () {
  var router = express.Router();

  // router.get('/', (req, res)=> {
  //   res.send('web外部页面').end();
  // })

  router.get('/', (req, res)=> {
    res.render('admin/index.ejs', {});
  });

  router.get('/get_banners', (req, res)=> {                          //接口  /get_banners
    db.query(`SELECT * FROM banner_table`, (err, data)=> {
      if(err) {
        console.error(err);
        res.status(500).send('database error').end();
      } else {
        res.send(data).end();
      }
    })
  });

  router.get('/get_custom_evaluation', (req, res)=> {
    db.query(`SELECT * FROM custom_evaluation_table`, (err, data)=> {
      if(err) {
        console.error(err);
        res.status(500).send('database error');
      } else {
        res.send(data).end();
      }
    })
  })

  return router;
}
