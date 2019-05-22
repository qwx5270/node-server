const querystring = require('querystring');

var json = querystring.parse("user=aaa&pass=123456&age=18");
console.log(json);
