// foreach methods using in Javascript:
// This is a forloop in javascript:
let data=["Ram", "Sam", "Kumar", "Sathya"];
for(i=0; i<data.length; i++)
{
 document.write("<h2> ["+i+"]="+data[i]+"</h2>");
}
document.write("<hr>");
//This is a foreach functions in javascript:
var database=["Ram", "Sam", "Kumar", "Sathya"];
database.forEach(display);
function display(item, indexs){ // This places change the item & index... 
 document.write("<h2>["+indexs+"]="+item+"</h2>");
}
document.write("<hr>");
//This is a foreach arrow functions in javascript:
var database=["Ram", "Sam", "Kumar", "Sathya"];
database.forEach((item, index)=>{ // This places change the item & index... 
 document.write("<h2>["+index+"]="+item+"</h2>");
})
document.write("<hr>");
var database=[100, 200, 300, 400, 500, 1000];
database.forEach((item, index)=>{ // This places change the item & index... 
 document.write("<h2>["+index+"]="+item+"</h2>");
})
document.write("<hr>");
// This is a foreach inline functions in javascript:
let datas=["Ram", "Sam", "Kumar", "Sathya"];
datas.forEach(function MyFun(mydata){
 document.write("<h2>"+mydata+"</h2>");
});
document.write("<hr>");