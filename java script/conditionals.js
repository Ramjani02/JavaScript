//conditional.js:
// Conditional statements:
// (i) If statement.
// (ii) Nested if statement.
// (iii) Else if statement.
// (iv) Else statement.
let mark=40;
if((mark>=35) && (mark<=50)){
 document.write("<h2> Grade C </h2>");
}
else if((mark>=50) && (mark<=80)){
 document.write("<h2> Grade B </h2>");
}
else if((mark>=80) && (mark<=100)){
 document.write("<h2> Grade A </h2>");
}
else{
 document.write("<h2> No Grade </h2>");
}
let marks=30; // nested if statement:
if(marks>=35){
 if(marks<=100){
 document.write("<h2> Result: Pass </h2>")
 }
 else{
 document.write("<h2> Invalid scores </h2>");
 }
}
else{
 document.write("<h2> Result: Fail </h2>");
}