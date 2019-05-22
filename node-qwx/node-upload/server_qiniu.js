const Koa = require('koa');
const fs = require('fs');
const pathLib = require('path');
const qiniu = require('qiniu');
const mysql = require('mysql');

const server = new Koa();

// server.context.db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '19980808qwxqwj',
//   database: 'learner'
// });

server.use(async ctx => {
  ctx;
  ctx.req;
  ctx.res;

  ctx.body = 'hello, koa';
  //console.log(ctx);
  //console.log(ctx.db);
});

server.on('error', (err, ctx) => {
  log.error('server error', err, ctx);
})

server.listen(1234);
