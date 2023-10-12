var Obj = require("./step1-helloworld.js").FirstClass;
/* 
for( let prop in obj ){
    console.log(prop, ":", obj[prop]);
} */

let firstclass = new Obj();

console.log(firstclass.saymyname);