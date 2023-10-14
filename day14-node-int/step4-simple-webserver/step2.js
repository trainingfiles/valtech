const express = require("express");
let app = express();
app.get("**", (req, res) => {
    // console.log(req.url);
    res.sendFile(__dirname+req.url+".html")
})
app.listen(2020,"localhost",error => error ? console.log("Error ", error) : console.log("server is now live on localhost:2020"))