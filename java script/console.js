//console.js:
console.log(20);
console.log(20.5);
console.log("Ajay");
console.log([10, 20, 30, 40, 50]);
console.log({Myname:"Ajay", Address:"Trichy"});
console.table({Myname:"Ajay", Age:22, Department: "Bioinformatics", Address:"Trichy"});
console.table([{Myname:"Ajay", Age:22, Department: "Bioinformatics", Address:"Trichy"}, 
{Myname:"Barath", Age:22, Department: "Bioinformatics", Address:"Trichy"}]);
console.warn("This is warning message....!");
console.error("This is error message....!");
limit=10;
msg="This is not even number.";
for(i=2;i<=10;i++)
{
 console.assert(i%2==0,{i,msg});
}
function Myfunction(){
 console.count();
}
Myfunction();
Myfunction();
console.count("Ajay"); 
console.count("Ajay");
console.countReset("Ajay"); //Reset the counting.....!
console.count("Ajay");
console.count("Ajay");
console.count("Ajay");
console.group("Group-1"); // Group and GroupEnd.....!
console.log("This is Group-1");
console.group("SGroup-1");
console.log("This is SGroup-1");
console.groupEnd("SGroup-1"); // Group and GroupEnd.....!
console.groupEnd("Group-1");
console.groupCollapsed("Group-2"); // Hide the Group-2 not show the messages....!
console.log("This is Group-2");
console.groupEnd("Group-2");
console.time("MyTime");
limit=10;
for(i=1;i<=limit;i++){
 console.log(i);
}
console.timeEnd("MyTime");