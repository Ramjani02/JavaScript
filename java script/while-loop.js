//whileloop.js:
// Basic while loops:
document.write("<h1> While Loops </h1>");
var start=1,end=3;
while(start<=end)
{
 document.write("<h1>"+start+"</h1>");
 start++;
}
// Conditionals in while loops:
start=1, end=6
document.write("<h1>Odd Numbers</h1>");
while(start<=end)
{
 if (start % 2 != 0){
 document.write("<h1>"+ start + "</h1>");
 }
 start++;
}
start=1, end=6
document.write("<h1>Even Numbers</h1>");
while(start<=end)
{
 if (start % 2 == 0){
 document.write("<h1>"+ start + "</h1>");
 }
 start++;
}