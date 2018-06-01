const db = require("../db/DBHelper.js")

module.exports = {
    server:(app,db)=>{

        /*获取商城所有商品*/
        app.get("/serverGoods",(req,res)=>{
            db.select(`select * from goods `,function(result){
                res.send(result.data);
            })
        });

        /*获取所有注册的用户*/
        app.get("/getUser",(req,res)=>{
            db.select(`select * from user`,function(result){
                res.send(result.data);
            })
        });

        /*商品模糊查询*/
        app.get("/searchGoods",(req,res)=>{
            console.log(req.query.search)
            let search = req.query.search;
            db.select(`select * from goods where title like '%${search}%' `,function(result){
                console.log(result.status)
                if(result.status){
                    res.send(result.data);
                }else{
                    res.send({status:false,data:"没有类似的商品"});
                }
            })
        });

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
        })
    }
}