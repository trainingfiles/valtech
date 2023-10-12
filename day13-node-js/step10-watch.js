const fs = require("fs");
fs.watchFile("temp.txt",function(){
    console.log("file was updated");
})