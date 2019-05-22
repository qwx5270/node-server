const ejs = require('ejs');

var str = ejs.renderFile('./views/2.ejs', {json: {arr: [
  {user: 'qwx', pass: '12345', address: '岳阳楼'},
  {user: 'xxx', pass: '12345678', address: 'xxx'},
  {user: 'zbc', pass: '55555', address: 'shanghai'},
]}}, function (err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log('成功');
    console.log(data);
  }
})
