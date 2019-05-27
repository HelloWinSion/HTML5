const mysql = require("mysql");
const express = require("express");
//3:创建连接池
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"xz"
});
//4:创建express对象
var server = express(); 
server.listen(3000);
server.use(express.static("public"))

//功能一:查询销售表返回统计信息 
server.get("/sal",(req,res)=>{
  var sql =" SELECT id,name,value FROM ";
      sql+=" xz_sal";
  pool.query(sql,(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })    
})
