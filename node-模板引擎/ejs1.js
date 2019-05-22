const ejs = require('ejs');

// ejs.render();

var str = ejs.renderFile('./views/1.ejs', {value: 'abc'}, function (err , data) {
  if(err)
    console.log('编译失败');
    else
      console.log(data);
});
