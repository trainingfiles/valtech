const fs = require("node:fs");
const herolist = require("./assets/herolist.json");
const data = require("./data/data.json");

// console.log(herolist[Math.round(Math.random() * herolist.length)]);

data.avengers.push(herolist[Math.round(Math.random() * herolist.length)]);
console.log(data);
fs.writeFileSync("data/data.json",JSON.stringify(data),"utf-8");
/*

let writeHero = function(){
    fs.writeFile("data/data.json",,function(error, data){
        if(error){
            console.warn("Error ", error);
        }
    }); 
   
}

if(fs.existsSync("data/data.json")){
    console.log("folder already exists");
    writeHero();
}else{
    fs.mkdirSync("data");
    writeHero();
    console.log("folder created and file updated");
}
*/
