const express = require('express');
const myBodyParser = require('./libs/my-body-parser');

var server = express();
server.listen(1022);

// server.use(function (req, res, next) {
//   var str = '';
//   req.on('data', function (data) {
//     str += data;
//   });
//   req.on('end', function () {
//     //req.body = str;
//       req.body = querystring.parse(str);
//
//       next();
//   });
//
// });

server.use(myBodyParser());

server.use('/', function (req, res) {
  console.log(req.body);
})
