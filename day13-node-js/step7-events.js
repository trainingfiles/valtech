let EventEmitter = require("node:events").EventEmitter;

let ee = new EventEmitter();
// ee.setMaxListeners(2);
/* 
ee.addListener("valtechevent", function(evt){
    console.log("valtech event happened");
}); 
*/

let valtechListener1 = function(evt){
    console.log("valtech1 event happened", evt);
}
function valtechListener2(evt){
    console.log("valtech2 event happened", evt);
}
function valtechListener3(evt){
    console.log("valtech3 event happened", evt);
}
ee.on("valtechevent",valtechListener1);
ee.on("valtechevent",valtechListener2);
ee.on("valtechevent",valtechListener3);

// ee.off("valtechevent",valtechListener1);

ee.emit("valtechevent", "first message" );
ee.emit("valtechevent", "second message" );
ee.emit("valtechevent", "third message" );

