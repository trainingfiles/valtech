function adder(num1, num2){
    return num1 + num2;
}; 
function multiplier(num1, num2){
    return num1 * num2;
}; 
// named 
// export { adder };
// export { adder as sparsh };

// default 
export default adder;
// named 
export { multiplier }