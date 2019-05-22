const querystring = require('querystring');

module.exports =function () {
  return function (req, res, next) {
    var str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      //req.body = str;
        req.body = querystring.parse(str);

        next();
    });

  };
}
