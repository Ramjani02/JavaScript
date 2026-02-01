//forloops.js:
// Basic forloops:
document.write("<h3> Basic for loops: Increment </h3>");
let table=4, limit=5; // It's using an increment...!
for(i=1;i<=limit;i++){
 document.write("<h2>"+i+"*"+table+"="+(i*table)+"</h2>");
}
document.write("<hr/>")
document.write("<h3> Basic for loops: Decrement </h3>");
let tables=4, limits=5; // It's using an decrement...!
for(k=limits;k>=1;k--){
 document.write("<h2>"+k+"*"+tables+"="+(k*tables)+"</h2>");
}
document.write("<hr/>");
// for in loops:
document.write("<h3> For in loops: </h3>");
let mydata={
 Name:"Ajay",
 Age:25,
 Dept:"Bioinfo",
 District:"Trichy"
}
for(keysss in mydata)
{
 document.write("<h3>"+keysss+"</h3>");
 document.write("<h3>"+mydata[keysss]+"</h3>");
 
 
 
}
document.write("<hr/>");
// for in loops: Array
document.write("<h3> For in loops: Array</h3>");
array=[10, 20, "Ajay", "Asin"];
for(indexes in array)
{
document.write("<h3>"+indexes+"</h3>");
document.write("<h3>"+array[indexes]+"</h3>");
}
document.write("<hr/>");
// for of loops: Array
document.write("<h3> For of loops: Array</h3>");
array=[10, 20, "Ajay", "Asin"];
for(indexes of array)
{
document.write("<h3>"+indexes+"</h3>");
}
document.write("<hr/>");