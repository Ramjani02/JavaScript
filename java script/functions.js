//Functions.js:
/* 
1. No Return without Argument.
2. Return Without Argument.
3. No Return with Argument.
4. Return with Argument.
*/
document.write("<h2> Function Definition: </h2>")
function add(){
 let a=10, b=5, c;
 c=a+b;
 document.write("<h1> Addition: "+ c +"</h1>")
}
add();
document.write("<hr/>")
document.write("<h2> No Return without Argument: </h2>")
function msg(){
 document.write("<h1> Hello World! </h1>")
}
msg();
document.write("<hr/>");
document.write("<h2> Return without Argument: </h2>")
function msgs(){
 Result = "Ajay";
 return Result;
}
Return = msgs();
document.write("<h1>"+Return+"</h1>");
document.write("<hr/>");
document.write("<h2> No Return with Argument: </h2>")
function msg2(name){
 document.write("<h1>"+ name+ "</h1>");
}
msg2("Akash");
document.write("<hr/>");
document.write("<h2> Return with Argument: </h2>")
function msg3(name){
 return name;
}
res=msg3("Barath");
document.write("<h1>"+res+"</h1>");
document.write("<hr/>");