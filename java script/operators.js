//operators.js:
// Arithmetic operators:
let a=10;
let b=10;
// Addition:
Result=a+b;
console.log("Result:"+Result);
//Substraction:
Result=a-b;
console.log("Result:"+Result);
//Multiplication:
Result=a*b;
console.log("Result:"+Result);
//Division:
Result=a/b;
console.log("Result:"+Result);
//Modulus:
Result=a%b;
console.log("Result:"+Result);
//Increment: (++)
Result=++a; 
console.log("Result:"+Result);
//Decrement: (--)
Result=--b;
console.log("Result:"+Result);
// Relational Operators:
let c=10;
let d=10;
// Less than: (<)
Result = (c < d);
console.log("Less than:"+Result);
// Less than or equal to: (<=)
Result = (c <= d);
console.log("Less than or equal to:"+Result);
// Greater than: (>)
Result = (c > d);
console.log("Greater than:"+Result);
// Greater than or equal to: (>=)
Result = (c >= d);
console.log("Greater than or equal to:"+Result);
// is equal to: (==) "It's refers to the same value and strings also accepted...!"
Result = (c == d);
console.log("is equal to:"+Result);
// Identical: (===) "It's refers to the same value and same strings are accepted...!"
Result = (c === d);
console.log("Identical:"+Result);
// Not equal to:
Result = (c != d);
console.log("Not equal to:"+Result);
// Not Identical:
Result = (c !== d);
console.log("Not Identical:"+Result);
// Logical operators: AND, OR, NOT
console.log("Logical AND:"+(true && true));
console.log("Logical OR:"+(true || false));
console.log("Logical NOT:"+(!true));
// Assignment operators:
var x=10, y=5;
x = x + y; //Normal Assignment
x+=y; // Compound Addition Assignment
console.log("Addition assignment:"+x);
var x=10, y=5;
x-=y; // Compound Substraction Assignment
console.log("Substraction assignment:"+x);
var x=10, y=5;
x*=y; // Compound Multiplication Assignment
console.log("Multiplication assignment:"+x);
var x=10, y=5;
x/=y; // Compound Division Assignment
console.log("Division assignment:"+x);
var x=10, y=5;
x%=y; // Compound Modulus Assignment
console.log("Modulus Assignment:"+x);
var x=10, y=5;
x**=y; // Compound Exponent Assignment
console.log("Exponent Assignment:"+x);