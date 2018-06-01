const db = require("../db/DBHelper.js")

module.exports = {
    product:(app,db)=>{
        /*获取购物车商品*/
        app.post("/getCart",(req,res)=>{
            console.log(req.body)
            let username = 1234567890;
            // let goodsid = Number(req.body.goodsId);
            // console.log(username,goodsid);
            db.select(`select * from cart where userId = ${username} `,(result)=>{
                console.log(result)
                if(result.status){
                    res.send(result.data);
                }else{
                    res.send({status:false});
                }
            });
        }),

        /*删除购车商品*/
        app.post("/delGoods",(req,res)=>{
            console.log(req.body)
            let data = JSON.parse(req.body.data);
            console.log(typeof data)
            let userId = null;
            data.map(function(item){
                console.log(item.goodsId);
                console.log(item.userId);
                userId = item.userId;
                let goodsId = item.goodsId;
                db.delete(`delete from cart where userId = ${userId} and goodsId = ${goodsId}`,function(result){
                    console.log(result.status)
                })
            })
            res.send({status:true});
        })

        /*添加商品到购物车*/
        app.post("/addCart",(req,res)=>{
            console.log(req.body);

            let userId = 1234567890;

            let goodsId = Number(req.body.goodsId);
            let Img = req.body.img;
            let price = req.body.price;
            let title = req.body.title;
            let Qty = Number(req.body.qty);
            let color = req.body.color;

            db.select(`select * from cart where userId = ${userId} and goodsId = ${goodsId}`,(result)=>{

                console.log(result.status)
                
                if(result.status){
                    console.log("已有数据");
                    db.update(`update cart set cart.qty = cart.qty+${Qty} where userId = ${userId} and goodsId = ${goodsId} `,(result)=>{
                        console.log(result.status);
                        res.send({status:result.status,data:"修改成功"});
                    });
                }else{
                    console.log("没有数据");
                    db.insert(`insert into cart (userId,goodsId,img,price,qty,title,color) values(${userId},${goodsId},'${Img}',${price},${Qty},'${title}',"${color}")`,(result)=>{
                        console.log(result.status);
                        res.send({status:result.status,datd:"插入成功"});
                    });
                }
            });
        }),
        
        /*获取商品数据*/
        app.get("/getGoods",(req,res)=>{
            console.log(req.query)
            let field = req.query.field;
            let goodsId = Number(req.query.goodsId);
            console.log( typeof field);
            console.log( typeof goodsId);

            if((typeof field) == 'string'){
                db.select(`select * from goods where field = "${field}"`,(result)=>{
                    console.log(result.data)
                    res.send(result.data);
                });
            }else if((typeof goodsId) == 'number'){
                db.select(`select * from goods where goodsId = ${goodsId}`,(result)=>{
                    console.log(result.data)
                    res.send(result.data);
                });
            }else{
                res.send({status:false,data:"您的参数可能不正确，请重新确认"});
            }
        });

        /*商品价格排序*/
        app.get("/price",(req,res)=>{
            let field = req.query.field;
            let status = req.query.status;
            console.log(req.query.field)
            if(status == 1){
                db.select(`select * from goods where field = "${field}" order by price asc`,function(result){
                    console.log(result.status)
                    if(result.status){
                        res.send(result.data)
                    }else{
                        res.send({status:false,data:"不存在的"});
                    }
                })
            }else if(status == 0){
                db.select(`select * from goods where field = "${field}" order by price desc`,function(result){
                    console.log(result.status)
                    if(result.status){
                        res.send(result.data)
                    }else{
                        res.send({status:false,data:"不存在的"});
                    }
                })
            }else{
                res.send({status:false,data:"你确定你是在排序吗"});
            }
        });

        /*商品销量排序*/
        app.get("/sales",(req,res)=>{
            // let field = req.query.field;
            let status = req.query.status;
            console.log(req.query.field)
            if(status == 1){
                db.select(`select * from goods where field = "${field}" order by salesNum asc`,function(result){
                    // console.log(result.status)
                    if(result.status){
                        res.send(result.data)
                    }else{
                        res.send({status:false,data:"不存在的"});
                    }
                })
            }else if(status == 0){
                db.select(`select * from goods where field = "${field}" order by salesNum desc`,function(result){
                    console.log(result.status)
                    if(result.status){
                        res.send(result.data)
                    }else{
                        res.send({status:false,data:"不存在的"});
                    }
                })
            }else{
                res.send({status:false,data:"你确定你是在排序吗"});
            }
        })

    }
}