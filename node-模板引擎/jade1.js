const jade = require('jade');
const fs = require('fs');

// var str = jade.render('html');

var str = jade.renderFile('./views/1.jade', {pretty: true});

// console.log(str);

fs.writeFile('./build/jade01.html', str, function (err) {
  if(err)
    console.log('写入文件失败');
    else
      console.log('成功');
});
