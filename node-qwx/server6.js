const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')

var server = express();
server.listen(1009);

// cookie
var arr = [];

for(var i=0; i<100000; i++) {
  arr.push('sig_' +Math.random());
}

server.use(cookieParser('qwx123xwq'));
server.use(cookieSession({
  name: 'sess',
  keys:  arr,        //['abc', 'qwx', 'xxx']
  maxAge: 10*60*1000
}));

server.use('/', function (req, res) {
  //console.log(req.session);
    if(req.session['count'] == null) {
      req.session['count'] = 1;
    } else {
      req.session['count']++;
    }

    console.log(req.session['count']);

  res.send('i am @OK');
})


//删除    delete req.session
