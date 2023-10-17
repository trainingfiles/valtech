const express = require("express");
const mongoose = require("mongoose");
const config = require("./config.json");
const errorHandler = require("./utils/errorhandler").eh;
//---------------------------------------
const app = express();
app.use(express.urlencoded({ extended : true }));
//---------------------------------------
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Hero = mongoose.model("Hero",new Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    email : { type : String, unique : true },
    password : String
}))
// app.use(express.viewEngine("pug"))
let url = `mongodb+srv://${config.dbuser}:${config.dbpass}@cluster0.${config.dbstring}.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(url)
.then(res => console.log("DB Connected"))
.catch(errorHandler)
//---------------------------------------
app.get("/", (req, res) => {
    res.render("home.pug",{ title : "Valtech Home Page" })
})
app.get("/login", (req, res) => {
    res.render("login.pug",{ title : "Valtech App Login Page" })
})
app.post("/login", (req, res) => {
    // console.log(req.body);
    Hero.findOne({ email : req.body.email })
    .then( dbres => {
        if(dbres.password === req.body.password){
            res.redirect("/profile")
        }else{
            res.render("login.pug",{ error : "Password is invalid" })
        }
    })
    .catch(error => {
        res.render("login.pug",{ error : "Invalid user details" })
    })
})
app.get("/register", (req, res) => {
    res.render("register.pug",{ title : "Users Registeration Page" })
})
app.post("/register", (req, res) => {
    // console.log(req.body);
    var hero = new Hero({
        firstname : req.body.fname,
        lastname : req.body.lname,
        email : req.body.email,
        password : req.body.password
    });
    hero.save().then(dbres => res.render("register.pug", { message : dbres.firstname+" Registered "})).catch(error => {
        if(error.code === 11000 ){
            res.render("register.pug", { error : "Email already registered "})
        }
    })
})
app.get("/profile", (req, res) => {
    res.render("profile.pug",{ title : "Your Profile Page" })
})
app.get("/logout", (req, res) => {
    res.render("logout.pug",{ title : "Logout Page" })
})

//---------------------------------------
app.listen(config.port, config.host, errorHandler);

/* 
http://p.ip.fi/bul5
*/