
const jwt = require('jsonwebtoken');

/*引入db.js模块*/
const db = require('../db/DBHelper.js');

const apiResult = require('../db/apiResult.js');

/*验证token*/
const filter = (req, res, next) => {
    let token = req.headers['auth'];
    if(!token){
        res.send(apiResult(false, {}, 'unauth'));
    } else {
        jwt.verify(token, '123456', (error, result) => {
            if(error){
                res.send(apiResult(false, error, 'unauth'))
            } else {
                next();
            }
        })
    }
}


/*导出user.js*/
module.exports = {
    user:function(app,db){
        /*用户登录*/
        app.post('/login',(req,res) =>{
            console.log(req.body);
            let username = req.body.username;
            let password = req.body.password;
            console.log(username,password);
            
            db.select({_sql:'SELECT * FROM `user` WHERE `username` = ? and `password` = ?' ,data: [username,password],_callback:function(result){
                    console.log(result.status)
                    if(result.status){
                        let token = jwt.sign({username},'123456',{expiresIn:60*5});
                        // let ar = apiResult(result.status,token,res.data);
                        res.send({status:true,data:token,username:username});
                    }else{
                        res.send(result);
                    }
            }});       
        });

        /*用户注册*/
        app.post('/reg',(req,res)=>{
            // 获取用户数据
            console.log(req.body)
            let username = req.body.phone;
            let password = req.body.pwd;

            // 用户地址：null
            // let address = '';

            // 调用数据库模块
            // 注册之前先查询是否存在
            if(req.body == {}){
                res.send({status:false,data:"接收不到数据"});
            }else{
                db.select({_sql:`select * from user where username = ${username}` ,_callback:function(result){
                    console.log(result)
                    if(result.status){
                        res.send({status:false,data:"该用户已存在"});
                    }else{
                        db.insert(`insert into user(username,password) values(${username},"${password}")`,function(result){
                            console.log(result);

                            res.send({status:true,data:"注册成功",username:username});
                        });
                    }
                }});

            }
        });

        /*用户的登录状态*/
        app.post('/getStatus', filter, async (req,res) => {
            res.send(apiResult(true));
        });

        /*获取地址*/
        app.post("/getRess",(req,res)=>{
            let username = req.body.username;
            console.log(req.body)
            db.select({_sql:`select * from address where userId = ${username}` ,_callback:function(result){
                console.log(result)
                if(result.status){
                    console.log(result.data);
                    res.send(result.data);
                }else{
                    res.send({status:false,data:"该用户不存在"});
                }
            }});
        })

        /*用户添加收货地址*/
        app.post("/addRess",(req,res)=>{
            console.log(req.body)
            let cnee = req.body.cnee;
            let phone = req.body.phone;
            let ress = req.body.ress;
            let userId = req.body.userId;
            db.insert(`insert into address(cnee,phone,ress,userId) values("${cnee}",${phone},"${ress}",${userId})`,function(result){
                console.log(result.status)
                res.send({status:true,data:"添加地址成功"})
            })
        });

        /*用户删除收货地址*/
        app.post("/delRess",(req,res)=>{
            console.log(req.body)
            let userId = req.body.userId;
            let id = req.body.id;
            db.select({_sql:`select * from address where userId = ${userId} and id = ${id}` ,_callback:function(result){
                console.log(result.status)
                if(result.status){
                    db.delete(`delete from address where userId = ${userId} and id = ${id}`,function(result){
                        console.log(666)
                        if(result.status){
                            res.send({status:result.data,data:"删除成功"});
                        }
                    })
                }else{
                    res.send({status:false,data:"该地址不存在"});
                }
            }});
        });

        /*用户修改收货地址*/
        app.post("/updateRess",(req,res)=>{
            // console.log(req.body);
            let id = req.body.id;
            let userId = req.body.userId;
            let cnee = req.body.cnee;
            let phone = req.body.phone;
            let ress = req.body.ress;
            db.select({_sql:`select * from address where userId = ${userId} and id = ${id}`,_callback:function(result){
                console.log(result.status);
                if(result.status){
                    db.update(`update address set cnee = "${cnee}",phone = ${phone},ress = "${ress}" where userId = ${userId} and id = ${id}`,function(result){
                        console.log(result.status);
                        res.send({status:result.status,data:"修改地址成功"});
                    })
                }else{
                    res.send({status:result.status,data:"该地址不存在"});
                }
            }});
        })
    }
}