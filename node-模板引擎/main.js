const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./views/index.jade', {pretty: true});

console.log(str);

fs.writeFile('./build/jade02.html', str, function (err, data) {
  if(err)
    console.log('写入失败');
    else
    console.log('写入成功');
})
