// Slice() method in Javascript
var data=["Mobile", "Laptop", "iPhone", "iPad", "Macbook"];
var result=data.slice();
console.log(result);
var result=data.slice(1);
console.log(result);
var result=data.slice(3);
console.log(result);
var result=data.slice(1,4);
console.log(result);
var result=data.slice(-3);
console.log(result);
var result=data.slice(1,-1); // -1 is called as removing the last one element...
console.log(result);
var result=data.slice(2,-1); // -1 is called as removing the last one element...
console.log(result);
var result=data.slice(-3,-1); // -1 is called as removing the last one element...
console.log(result);
var result=data.slice(2, -2); // -2 is called as removing the last two element...
console.log(result);
var result=data.slice(2, 3);
console.log(result);