const db = require("../db/DBHelper.js")

module.exports = {
    server:(app,db)=>{
        app.get("/serverGoods",(req,res)=>{
            db.select(`select * from goods `,function(result){
                res.send(result.data);
            })
        });
        app.get("/getUser",(req,res)=>{
            db.select(`select * from user`,function(result){
                res.send(result.data);
            })
        })
    }
}