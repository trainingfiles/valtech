/* 
create an event that happens every second and only for 5 times
*/

const EventEmitter = require("node:events").EventEmitter;

let ee = new EventEmitter();
let count = 1;
let si = setInterval(()=>{
    console.log("timer happened");
    if(count < 6){
        ee.emit("valtechEvent", new Date().getSeconds());
        count++;
    }else{
        clearInterval(si);
        ee.off("valtechEvent", valtechHandler);
    }
}, 1000);

let valtechHandler = function(evt){
    console.log("valtech event happened ", evt);
}

ee.on("valtechEvent", valtechHandler);