//Callback Functions.js:
// Callback Functions:
// Normal methods:
function UserInput(callback){
 const data=prompt("Enter your name:");
 callback(data);
}
function Display(data){
 // alert(Name : ${data});
 document.write("<h2> Name: "+data+"</h2>");
}
UserInput(Display);
document.write("<hr>");
// Addition using this methods:
function Sum(val1, val2, callbacks){
 let out=val1+val2;
 callbacks(out);
}
function callback(out){
 document.write("<h2> Sum: "+ out +"</h2>");
}
Sum(50, 60, callback);
document.write("<hr>");