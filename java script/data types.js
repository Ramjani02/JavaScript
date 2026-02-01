//datatypes.js:
// Datatypes in Javascript:
/* 
 1. Primitive Datatypes:
 (i) Number.
 (ii) String.
 (iii) Boolean.
 2. Trivial Datatypes:
 (i) Null.
 (ii) undefined.
 3. Composite Datatypes:
 (i) Object.
 (ii) Array.
 (iii) Function.
*/
// Primitive Datatypes examples:
let Num=10;
console.log(Num+":"+typeof(Num));
let Myname = "Ajay";
console.log(Myname+":"+typeof(Myname));
let Isstudent = true;
console.log(Isstudent+":"+typeof(Isstudent));
// Trivial Datatypes examples:
let Address=null;
console.log(Address+":"+typeof(Address));
let Mobile;
console.log(Mobile+":"+typeof(Mobile));
// Composite Datatypes examples:
let info={Name:"Ajay", Age:22, Dept:"Bioinformatics", Address:"Trichy"};
console.log(info)
console.log(typeof(info));
let data=[10, 20, 35.5, "ajay"];
console.log(data)
console.log(typeof(data));
console.log(typeof(function MyFunction(){}));