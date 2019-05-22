const jade = require('jade');

var str = jade.renderFile('./views/3.jade', {pretty: true,
   json: {width: '20px', height: '10px', color: 'red'},
   arr: ['xxx', 'hide', 'active'],
   qq: 3145096505,
   arr1: ['111', '222', '333'],
   content: '<h3>xxx</h3><div>你好啊</div>'
 });

console.log(str);
