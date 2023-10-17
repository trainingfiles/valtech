"use strict";
let message = "555";
let age = 20;
// let favnums:Array<string> = ["","55"];
// let favnums:string[] = ["","55"];
let vals = "";
// alert(message);
/*
function adder(num1:number = 0, num2:number = 0){
    return num1 + num2;
}
*/
function adder(num1 = 0, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1 + num1;
    }
}
/* function adder(num1:number = 0, num2:number = 0 ):string{
    // console.log(num1 + num2);
    return num1 + num2;
}  */
console.log(adder(5));
console.log(adder(5, 6));
