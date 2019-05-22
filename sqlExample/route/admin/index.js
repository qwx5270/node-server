const express = require('express');

module.exports = function () {
  var router = express.Router();

  //检查登录状态
  router.use((req, res, next)=> {
    if(!req.session['admin_id'] && req.url != '/login') {     //没有登录
      res.redirect('/admin/login');           //重定向
    } else {
      next();
    }
  });

  router.use('/login/', require('./login')());

  router.get('/', (req, res)=> {
    //res.send('登录成功了').end();
    res.render('admin/home.ejs', {});
  });

  router.use('/banners/', require('./banners')());
  router.use('/custom/', require('./custom')());

  return router;
}
