const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const db = require("../db/DBHelper.js")

app.use(bodyparser.urlencoded({extended:true}));

// app.use(bodyparser.json());

app.use(express.static(path.join(__dirname+'../../')))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,auth,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

const user = require('./user.js')
const product = require('./product.js')
const server = require('./server.js')

module.exports = {
  start(_port=88){
    user.user(app,db);
    product.product(app,db);
    server.server(app,db);
    app.listen(_port);
  }
}
