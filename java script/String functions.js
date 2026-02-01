// String Functions:
// 1.) charAt()
var Myname="Ajay";
document.write("<h2> First Character: " + Myname.charAt() +"</h2>")
document.write("<h2> Last Character: " + Myname.charAt(Myname.length-1) +"</h2>")
document.write("<h2> Specified Character: " + Myname.charAt(2) +"</h2>")
document.write("<hr>")
// 2.) charCodeAt()
var Myname="Ajay";
document.write("<h2> First Character: " + Myname.charCodeAt() +"</h2>")
document.write("<h2> Last Character: " + Myname.charCodeAt(Myname.length-1) +"</h2>")
document.write("<h2> Specified Character: " + Myname.charCodeAt(2) +"</h2>")
document.write("<hr>")
// 3.) concat()
var FName="Ajay";
var LName="Kumar";
document.write("<h2> Concatenation: " + FName.concat(LName) +"</h2>")
document.write("<hr>")
// 4.) indexOf()
var MyName="Akash";
document.write("<h2> IndexOf: " + MyName.indexOf('a') +"</h2>")
document.write("<hr>")
// 5.) lastindexOf()
var MyName="akashaya";
document.write("<h2> Last IndexOf: " + MyName.lastIndexOf('a') +"</h2>")
document.write("<hr>")
// 6.) search()
var msg="This is a Javascript String Tutorial";
document.write("<h2> Search: " + msg.search('String') +"</h2>")
document.write("<h2> Search: " + msg.search('string') +"</h2>")
document.write("<h2> Ignore Case-sensitive: " + msg.search(/string/i) +"</h2>")
document.write("<h2> Ignore Case-sensitive: " + msg.search(/tutorial/i) +"</h2>")
document.write("<hr>")
// 7.) match()
var msg="This is a Javascript String Tutorial";
document.write("<h2> Search: " + msg.match('String') +"</h2>")
document.write("<h2> Search: " + msg.match('string') +"</h2>")
document.write("<h2> Ignore Case-sensitive: " + msg.match(/string/i) +"</h2>")
document.write("<h2> Ignore Case-sensitive: " + msg.match(/tutorial/i) +"</h2>")
document.write("<hr>")
// 8.) replace()
var msg1="Javascript Tutorial";
var msg2="Python";
document.write("<h2> Message1: " + msg1 +"</h2>")
document.write("<h2> Message2: " + msg1.replace("Javascript", msg2) +"</h2>")
document.write("<hr>")
// 9.) replaceall()
var msg1="Javascript Tutorial. Javascript is a scripting language.";
var msg2="Python";
document.write("<h2> Before ReplaceAll: " + msg1 +"</h2>")
document.write("<h2> After ReplaceAll: " + msg1.replaceAll("Javascript", msg2) +"</h2>")
document.write("<hr>")
// 10.) substr(start, length)
var data="Javascript Tutorial";
document.write("<h2> Fetch from start of the string: " + data.substr(0,10) +"</h2>")
document.write("<h2> Fetch from end of the string: " + data.substr(-8) +"</h2>")
document.write("<hr>")
// 11.) substring()
var data="Javascript";
document.write("<h2> substr: " + data.substr(4,6) +"</h2>")
document.write("<h2> substring: " + data.substring(4,10) +"</h2>")
document.write("<h2> substring: " + data.substring(4,0) +"</h2>")
document.write("<hr>")
// 12.) slice()
var data="Javascript";
document.write("<h2> slice: " + data.slice(0,4) +"</h2>")
document.write("<h2> slice: " + data.slice(4,10) +"</h2>")
document.write("<h2> slice: " + data.slice(-3) +"</h2>")
document.write("<hr>")
// 13.) toLowerCase()
var data="Javascript";
document.write("<h2> toLowerCase: " + data.toLowerCase() +"</h2>")
document.write("<hr>")
// 14.) toUpperCase()
var data="Javascript";
document.write("<h2> toUpperCase: " + data.toUpperCase() +"</h2>")
document.write("<hr>")
// 15.) toString()
var data=3;
document.write("<h2> Datatype: " + typeof(data) +"</h2>")
document.write("<h2> toString: " + data.toString() +"</h2>")
document.write("<h2> Datatype: " + typeof(data) +"</h2>")
var str=data.toString();
document.write("<h2> Datatype: "+ typeof(str)+"</h2>");
document.write("<hr>")
// 16.) valueof() [It's converts a primitive value into a primitive string.]
var data="Javascript";
document.write("<h2> Primitive string: " + typeof(data) +"</h2>")
var strobj=new String("Javascript");
document.write("<h2> String Object: " + typeof(strobj) +"</h2>")
document.write("<h2> String Object - Primitive String: " + typeof(strobj.valueOf()) +"</h2>")
document.write("<hr>")
// 17.) split()
var data="Javascript is a scripting language";
res=data.split(" ");
document.write("<h2> Split: "+ res + "</h2>");
document.write("<hr>")
// 18.) trim()
var data=" Javascript ";
document.write("<h2> Before Trim: "+ data +" = " +data.length+"</h2>");
res=data.trim()
document.write("<h2> Before Trim: "+ res +" = " +res.length+"</h2>");
document.write("<hr>")
// 19.) trimStart()
var data=" Javascript ";
document.write("<h2> Before TrimStart: "+ data +" = " +data.length+"</h2>");
res=data.trimStart()
document.write("<h2> Before TrimStart: "+ res +" = " +res.length+"</h2>");
document.write("<hr>")
// 20.) trimEnd()
var data=" Javascript ";
document.write("<h2> Before TrimEnd: "+ data +" = " +data.length+"</h2>");
res=data.trimEnd()
document.write("<h2> Before TrimEnd: "+ res +" = " +res.length+"</h2>");
document.write("<hr>")
// 21.) padStart()
var data="9";
document.write("<h2> PadStart: "+ data.padStart(5, "x")+"</h2>");
document.write("<hr>")
// 22.) padEnd()
var data="9";
document.write("<h2> PadEnd: "+ data.padEnd(5, "x")+"</h2>");
document.write("<hr>")
// 23.) length
var data="Sathya";
document.write("<h2> Length: "+ data.length+"</h2>");
document.write("<hr>")
// 24.) includes()
var data=["HTML", "CSS", "Javascript", "Bootstrap"];
document.write("<h2> includes: "+ data.includes("CSS")+"</h2>");
document.write("<h2> includes: "+ data.includes("Programming")+"</h2>");
document.write("<hr>")
// 25.) fromCharCode() [It's using an ASCII values.]
document.write("<h2> fromCharCode: "+65+" = "+ String.fromCharCode(65)+"</h2>");
document.write("<h2> fromCharCode: "+85+" = "+ String.fromCharCode(85)+"</h2>");
document.write("<hr>")