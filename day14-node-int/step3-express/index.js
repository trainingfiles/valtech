const express = require("express");
let app = express();
app.get("/", function(req, res){
    /*
    res.write("welcome to express");
    res.end();
    */
   /*
   res.send("welcome to your life")
   */
  res.sendFile(__dirname+"/index.html")
});
app.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error : ", error)
    }else{
        console.log("server is now live on localhost:1010")
    }
});
/* 
const app = require("express")();
let config = app.listen();
console.log(config.address().port); 
*/

/* 
http://p.ip.fi/s7q4
*/