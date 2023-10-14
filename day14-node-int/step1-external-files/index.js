let fetch = require("fetch");
let fs = require("node:fs");
let domain = process.argv[2];
fetch.fetchUrl(`https://www.${domain}.com/`,function(error, meta, data){
// console.log(data+"");
fs.writeFileSync(`${domain}.html`,data,"utf-8");
})