const urlLib = require('url');

var obj = urlLib.parse("https://www.baidu.com/index?a=123&b=qwx&age=19", true);

console.log(obj.pathname, obj.query);
