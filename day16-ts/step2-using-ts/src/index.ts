let express = require("express");
let config = require("../config.json");

let app = express();
app.get("/", (req:any, res:any) => {
    res.send("~~~ welcome to your life ~~~");
})

app.listen(config.port, config.host, function(error:object){
    if(error){
        console.log("Error ", error)
    }else{
        console.log(`server is now live on ${config.host}:${config.port}`)
    }
})
