const express = require("express");
let app = express();
// middleware
app.use(express.static(__dirname+"/public"));
app.listen(2020,"localhost",error => error ? console.log("Error ", error) : console.log("server is now live on localhost:2020"))


/* 
http://p.ip.fi/blb0
*/