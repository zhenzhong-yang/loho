const mysql = require('mysql');
// const apiReulst = require('./apiResult.js')

const db = mysql.createPool({
    connectionLimit: true,
    host: "localhost",//ip地址
    user: 'root',
    password: 'root',
    port:'3306',
    database: 'loho'//数据库名字
})


module.exports = {
    select: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
           // console.log(results);
            if(error || results.length == 0){
                _callback({status: false, error: error})
            }else if(results.length > 0){
               _callback({status: true, data: {results}});
            }
           
            
        })
    },//插入
    insert: function(_sql,_callback){
        db.query(_sql, function(error, results,fields){
            console.log(error)
            if(error!="null"){
                _callback({status: true, data: {results}});
                
            }else{
               // _callback(results.insertId);
                _callback({status: false, error: error})
            }
        })
    },
    delete: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status: true, data: {results}});
            }
        })
    },
    update: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            console.log(results);
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status: true, data: {results}});
            }
        })
    }
}