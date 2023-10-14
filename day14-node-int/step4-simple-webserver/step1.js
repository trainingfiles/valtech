const express = require("express");
let app = express();
// routes
// home routes
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
})
// about routes
app.get("/about", (req, res) => {
    res.sendFile(__dirname+"/about.html")
})
// contact routes
app.get("/contact", (req, res) => {
    res.sendFile(__dirname+"/contact.html")
})
// wildcard route
app.get("**", (req, res) => {
    res.sendFile(__dirname+"/notfound.html")
})
app.listen(2020,"localhost",error => error ? console.log("Error ", error) : console.log("server is now live on localhost:2020"))