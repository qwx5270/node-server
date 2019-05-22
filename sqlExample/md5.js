/* const crypto = require('crypto');

var obj = crypto.createHash('md5');

obj.update('123456');

var str = obj.digest('hex');

console.log(str);  */


const common = require('./libs/common');

var str = '123456789';

var str = common.md5(str+ 'zbcRETRfdsgfd#@!^etGTgfgfFHG(F324325gfdb~~~00*&^Y^gdsg)fdgfdg哈哈...');


console.log(str);
