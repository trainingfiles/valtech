"use strict";
let express = require("express");
let config = require("../config.json");
let app = express();
app.get("/", (req, res) => {
    res.send("~~~ welcome to your life ~~~");
});
app.listen(config.port, config.host, function (error) {
    if (error) {
        console.log("Error ", error);
    }
    else {
        console.log(`server is now live on ${config.host}:${config.port}`);
    }
});
