const db = require("../db/DBHelper.js")

module.exports = {
    product:(app,db)=>{
        /*获取购物车商品*/
        app.post("/getCart",(req,res)=>{
            console.log(req.body)
            let username = req.body.userId;
            let goodsid = Number(req.body.goodsId);
            console.log(username,goodsid);
            db.select(`select * from cart where userId = ${username} and goodsId = ${goodsid} `,(result)=>{
                console.log(result)
                if(result.status){
                    res.send(result.data);
                }else{
                    res.send({status:false});
                }
            });
        }),

        /*添加商品到购物车*/
        app.post("/addCart",(req,res)=>{
            console.log(req.body);

            let userId = req.body.userId;

            let goodsId = Number(req.body.goodsId);
            let Img = req.body.img;
            let price = req.body.price;
            let title = req.body.title;
            let Qty = Number(req.body.qty);

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
                    db.insert(`insert into cart (userId,goodsId,img,price,qty,title) values(${userId},${goodsId},'${Img}',${price},${Qty},'${title}')`,(result)=>{
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

        /*商品排序*/
        app.get("/price",(req,res)=>{
            let field = req.query.field;
            console.log(req.query.field)
            db.select(`select * from goods where field = "${field}" order by price asc`,function(result){
                console.log(result.status)
                if(result.status){
                    res.send(result.data)
                }else{
                    res.send({status:false,data:"不存在的"});
                }
            })
        })

    }
}