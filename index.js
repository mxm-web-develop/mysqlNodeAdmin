var express = require('express');
var app = express();
 
var mysqlAdmin = require('node-mysql-admin');
app.use(mysqlAdmin(app));

app.listen(3009,()=>{
   console.log('服务启动在：http://localhost:3009/myadmin');
})