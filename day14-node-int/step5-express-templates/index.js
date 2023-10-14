const express = require("express");
const config = require("./config.json");
const app = express();
// configuration
app.use(express.urlencoded({ extended : true }));

// middlewares
let company = "Valtech Bengalooru";
let avengers = [];
// routes 
app.get("/", (req, res) => {
   res.render("home.pug", { company, avengers })
})
app.post("/", (req, res) => {
   // console.log(req.body)
   avengers.push(req.body.valtechhero);
   res.redirect("/");
})

// server configuration 
app.listen(config.port,config.host,error => {
    error 
    ? console.log("Error ", error)
    : console.log(`server is now live on ${config.host} : ${config.port}`)
})

/* 
http://p.ip.fi/U6cQ
*/

/* 
http://p.ip.fi/8HWj
*/