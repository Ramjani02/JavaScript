//variables.js:
// Variables predefined called as var, let, const, nothing:
// VARIABLES in JavaScript
// =======================
// Using var
console.log("=== var using ===");
var myVar = "Ajay"; // Global variable
console.log("Outside Function: " + myVar);
function varFunction() {
 var myVar = "Mohammed"; // Local variable
 console.log("Inside Function: " + myVar);
 var myVar = "Praveen";
 console.log(myVar)
}
varFunction();
var myVar = "Barath"; // Redeclare allowed
console.log("After Redeclare: " + myVar);
// Using let
console.log("\n=== let using ===");
let myLet = "Ajay"; // Global variable
console.log("Outside Function: " + myLet);
function letFunction() {
 let myLet = "Mohammed"; // Local variable
 console.log("Inside Function: " + myLet);
}
letFunction();
let my_Let = "Barath"; // Reassign allowed
console.log("After Reassign: " + my_Let);
// Using const
console.log("\n=== const using ===");
const myConst = "Ajay"; // Global variable
console.log("Outside Function: " + myConst);
function constFunction() {
 const myConst = "Mohammed"; // Local variable
 console.log("Inside Function: " + myConst);
}
constFunction();
// myConst = "Barath"; // Reassign not allowed
// console.log("After Reassign: " + myConst);
// Using nothing (undeclared)
console.log("\n=== nothing (undeclared) using ===");
myNothing = "Ajay"; // Global by default (bad practice)
console.log("First Value: " + myNothing);
myNothing = "Barath"; // Reassign allowed
console.log("After Reassign: " + myNothing);
function nothingFunction() {
 myNothing = "Mohammed"; // Works, changes global
 console.log("Inside Function: " + myNothing);
}
nothingFunction();
console.log("Global After Function: " + myNothing);
// Conditions:
if(true){
 const msg="Welcome to Javascript";
 console.log(msg);
}
// console.log(msg);
// var and nothing: It's both are working with a same variable names...!
var fname="Ajay";
console.log(fname);
fname="Barath";
console.log(fname);
//let and nothing: It's both are working with a same variable names...!
let f_name="Ajay";
console.log(f_name);
f_name="Barath";
console.log(fname);
//const and nothing: It's both are not working with a same variable names...!
const fnames="Ajay";
console.log(fnames);
names="Barath";
console.log(names);