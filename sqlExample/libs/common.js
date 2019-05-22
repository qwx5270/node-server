const crypto = require('crypto');

module.exports = {
  MD5_SUFFIX: 'zbcRETRfdsgfd#@!^etGTgfgfFHG(F324325gfdb~~~00*&^Y^gdsg)fdgfdg哈哈...',
  md5: function (str) {
    var obj = crypto.createHash('md5');

    obj.update(str);

    return obj.digest('hex');
  }
}
