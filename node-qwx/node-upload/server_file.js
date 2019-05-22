const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');
var qiniu = require('qiniu');

//var objMulter = multer({dest: './www/upload/'});

var server = express();

//功能不全  不行的
//server.use(bodyParser.urlencoded({extended: false}));

//server.use(objMulter.any());

// server.post('/', function (req, res) {
//   console.log(req.body);
//   console.log(req.files[0].originalname);
//
//   //'www\\upload\\bdbe1c79fc0e11bc6d63b5f42799f9ed' + '.png'
//
//   var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
//   console.log(newName);
//
//   fs.rename(req.files[0].path, newName, function (err) {
//     if(err) {
//       res.send('上传失败');
//     } else {
//       res.send('成功');
//     }
//   });
//
//   //1. 获取原始的文件扩展名
//   //2. 重命名零时文件
// })

server.post('/', function (req, res) {

  var newName = req.files[0].originalname;
    //console.log(req.files[0].originalname);
  var newPath = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

  qiniu.conf.ACCESS_KEY = '4cRDNSXWUkHn3-DrZicWLpKFsnU5izaEJVhNiKsz';
  qiniu.conf.SECRET_KEY = 'EVLddyPraEYyqOxY-M4YeyMlNgXrjYtdteJPTbq0';

  bucket = 'solo-qwx';

  //上传到七牛后保存的文件名
  key = 'newName';

  //构建上传策略函数
  function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
    return putPolicy.token();
  }

  //生成上传 Token
  token = uptoken(bucket, key);

  //要上传文件的本地路径
  filePath = 'newPath'

  //构造上传函数
  function uploadFile(uptoken, key, localFile) {
    var extra = new qiniu.io.PutExtra();
      qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
          // 上传成功， 处理返回值
          console.log(ret.hash, ret.key, ret.persistentId);
        } else {
          // 上传失败， 处理返回代码
          console.log(err);
        }
    });
  }
  //调用uploadFile上传
uploadFile(token, key, filePath);

})


server.listen(1234);

//body-parser    解析post数据    enctype="application/x-www-form-urlencoded"  默认
//server.use(bodyParser.urlencoded());

//multer         解析post文件    enctype="multipart/form-data"
//var obj = multer({des:'./path'});
// server.use(obj.any());
// server.use(obj.single('file'));

//path:
//base    文件名部分
//ext     扩展名
//dir     路径
//name    文件名部分
