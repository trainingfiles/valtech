let message:string = "555";
let age:number = 20;
// let favnums:Array<string> = ["","55"];
// let favnums:string[] = ["","55"];

let vals:(string | number | boolean) = "";

// alert(message);
/* 
function adder(num1:number = 0, num2:number = 0){
    return num1 + num2;
} 
*/


function adder(num1:number = 0, num2?:number ){
    if(num2){
        return num1 + num2;
    }else{
        return num1 + num1;
    }
} 

/* function adder(num1:number = 0, num2:number = 0 ):string{
    // console.log(num1 + num2);
    return num1 + num2;
}  */

console.log(adder(5));
console.log(adder(5,6));