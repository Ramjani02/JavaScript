//Numerical functions.js
// It's a numerical functions...
// 1.) isfinite()
var x=5;
document.write("<h2> Finite Number: "+Number.isFinite(x)+"</h2>") 
document.write("<h2> Finite Number: "+Number.isFinite(x/0)+"</h2>") 
document.write("<h2> Finite Number: "+Number.isFinite(Infinity)+"</h2>") 
document.write("<h2> Finite Number: "+Number.isFinite(NaN)+"</h2>") 
document.write("<hr>");
// 2.) isInteger()
var x=5;
var y="Ajay";
document.write("<h2> Integer Number: "+Number.isInteger(x)+"</h2>") 
document.write("<h2> Integer Number: "+Number.isInteger(y)+"</h2>") 
document.write("<hr>");
// 3.) parseInt() [It's converts string into a integer.]
var x=5;
var y="10";
var z=x+y;
document.write("<h2> ParseInteger: "+z+" = "+typeof(z)+"</h2>") 
z=x+Number.parseInt(y);
document.write("<h2> ParseInteger: "+z+" = "+typeof(z)+"</h2>") 
document.write("<hr>");
// 4.) parseFloat() [It's converts string into a float points.]
var x="5.2";
var y="10.5";
document.write("<h2> ParseFloatpoint: "+x+" = "+typeof(x)+"</h2>") 
z=Number.parseFloat(x)+Number.parseFloat(y);
document.write("<h2> ParseFloatpoint: "+z+" = "+typeof(z)+"</h2>") 
document.write("<hr>");
// 5.) toExponential()
var x=23456789;
document.write("<h2> Exponential: "+x.toExponential()+"</h2>") 
document.write("<h2> Exponential: "+x.toExponential(4)+"</h2>") 
document.write("<h2> Exponential: "+x.toExponential(2)+"</h2>") 
document.write("<hr>");
// 6.) toFixed()
var x=123.456789;
document.write("<h2> toFixed: "+x+" = "+typeof(x)+"</h2>") 
document.write("<h2> toFixed: "+x.toFixed()+"</h2>") 
z=x.toFixed(5)
document.write("<h2> toFixed: "+z+" = " + typeof(z)+"</h2>") 
document.write("<hr>");
// 7.) toPrecision()
var x=23456789;
document.write("<h2> toPrecision: "+x+" = "+typeof(x)+"</h2>") 
document.write("<h2> toPrecision: "+x.toPrecision()+"</h2>") 
z=x.toPrecision();
document.write("<h2> toPrecision: "+z+" = "+typeof(z)+"</h2>") 
y=x.toPrecision(5);
document.write("<h2> toPrecision: "+y+" = "+typeof(y)+"</h2>") 
document.write("<hr>");
// 8.) toString()
var x=20;
var y=40;
var z=x.toString()+y.toString();
document.write("<h2> toString: "+z+" = "+typeof(z)+"</h2>") 
document.write("<hr>");
// 9.) valueOf() [It's converts object into a number.]
var x=new Number(55);
document.write("<h2> valueOf: "+x+" = "+typeof(x)+"</h2>") 
z=x.valueOf();
document.write("<h2> valueOf: "+z+" = " + typeof(z)+"</h2>") 
document.write("<hr>");
// 10.) isNaN()
var x=55.5;
var y="Hello";
document.write("<h2> isNaN: "+isNaN(x)+"</h2>")
document.write("<h2> isNaN: "+isNaN(y)+"</h2>")
document.write("<hr>")