const fs = require("node:fs");

/* 
fs.writeFileSync("temp.txt","welcome to your life");
console.log("file is created");
*/

// console.log(fs.readFileSync("temp.txt")+"");
// console.log(fs.readFileSync("temp.txt","utf-8"));
/* 
console.log("log from line 11");
fs.writeFile("temp.txt","welcome to your life",function(){
    console.log("log from line 13");
});
console.log("file is created log from line 15"); */
/* 
console.log("log from line 17")
fs.readFile("temp.txt","utf-8",function(error, data){
    console.log("Data", data);
    console.log("log from line 20");
});
console.log("log from line 22"); 
*/

// fs.writeFileSync("temp.txt","welcome to your life",{ a : true });
fs.watchFile("temp.txt",{interval : 1000},function(){
    console.log("file was updated");
})

let count = 0;
let song = ["\nwelcome to your life",
            "\nther's no turning back",
            "\neven while you sleep", 
            "\nwe will find you acting on your best behaviour",
            "\nturn your back on mother nature",
            "\neverybody wants to rule the world"];

let si = setInterval(function(){
    if(count < 6){
        fs.writeFileSync("temp.txt",song[count],{ flag : "a" });
        console.log("count now is : ", count);
        count++;
    }
    else{
        clearInterval(si);
    }
},2000);


/* 
http://p.ip.fi/yVOF
*/