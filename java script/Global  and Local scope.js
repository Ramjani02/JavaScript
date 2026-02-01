//Global & local.js:
/* 
 1.) Global Scope
 2.) Local Scope
 3.) Block Scope
*/
// Eg:1 // Global scope...
console.log("Global scope:")
var myName="Ajay";
console.log(myName);
function myFunction(){
 console.log(myName);
}
myFunction();
// Eg:2 // Global & local scope...
console.log("Global scope & Local scope:")
function user(){
 let userName="Ajay";
 console.log(userName);
 greet();
 function greet(){
 let greetUser="Welcome";
 console.log(greetUser,userName);
 console.log(greetUser);
 }
 // console.log(greetUser); // It's not come to the output... because it not a global...
 console.log(userName);
}
user();
// Eg:3 // Block scope...
console.log("Block scope:")
{
 var myName="Ajay";
 console.log(myName);
}
console.log(myName);
// Eg:4 // Local scope...
console.log("Local scope:")
function myFunction(){
 var myName="Ajay kumar";
 console.log(myName);
}
myFunction();