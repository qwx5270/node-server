const ejs = require('ejs');

var str = ejs.renderFile('./views/3.ejs', {}, function (err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log('成功');
    console.log(data);
  }
})
