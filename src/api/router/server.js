const db = require("../db/DBHelper.js")

module.exports = {
    server:(app,db)=>{

        /*获取商城所有商品*/
        app.get("/serverGoods",(req,res)=>{
            db.select({_sql:`select * from goods ` ,_callback:function(result){
                res.send(result.data);
            }})
        });

        /*获取所有注册的用户*/
        app.get("/getUser",(req,res)=>{
            db.select({_sql:`select * from user`,_callback:function(result){
                res.send(result.data);
            }});
        });

        /*商品模糊查询*/
        app.get("/searchGoods",(req,res)=>{
            console.log(req.query.search)
            let search = req.query.search;
            db.select({_sql:`select * from goods where title like '%${search}%' `,_callback:function(result){
                console.log(result.status)
                if(result.status){
                    res.send(result.data);
                }else{
                    res.send({status:false,data:"没有类似的商品"});
                }
            }});
        });

        /*修改商品信息*/
        app.get("/updateGoods",(req,res)=>{
            console.log(req.query)
            let img = req.query.img;
            let price = req.query.price;
            let goodsId = req.query.goodsId;
            let salesNum = req.query.salesNum;
            let isNew = req.query.isNew;
            let title = req.query.title;
            let field =req.query.field;
            db.update(`update goods set img = '${img}',price = ${price},isNew = '${isNew}',title = '${title}',field = '${field}' where goodsId = ${goodsId}`,function(result){
                res.send({status:true});
            })
        });

        /*后台添加商品信息*/
        app.get("/addGoods",(req,res)=>{
            console.log(req.query)
            let img = req.query.img;
            let price = req.query.price;
            let goodsId = req.query.goodsId;
            let salesNum = req.query.salesNum;
            let isNew = req.query.isNew;
            let title = req.query.title;
            let field =req.query.field;
            db.insert(`insert into goods (img,price,salesNum,isNew,title,field) values('${img}',${price},${salesNum},'${isNew}','${title}','${field}')`,function(result){
                console.log(result.status);
                if(result.status){
                    res.send({status:true,data:"添加成功"});
                }else{
                    res.send(error);
                }
            })
        });

        /*后台删除商品*/
        app.get("/del",(req,res)=>{
            let goodsId = req.query.goodsId;
            db.delete(`delete from goods where goodsId = ${goodsId}`,function(result){
                console.log(result.status);
                if(result.status){
                    res.send({status:true,data:"删除成功"});
                }else{
                    res.send(error);
                }
                
            })
        })
    }
}