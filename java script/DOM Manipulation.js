/*
 DOM Manipulation in Javascript
*/
// Eg:1
/*
let body = document.body;
// body.append("DOM MANIPULATION");
body.innerHTML="<h1>DOM MANIPULATION</h1>";
*/
// Eg:2
/*
let body=document.body
divElement=document.createElement("div");
divElement.innerHTML="<h1>Document Object Model</h1>";
// divElement.textContent="<h1>JS Document Object Model</h1>";
body.append(divElement);
*/
// Eg:3: It's using html code in Welcome & Javascript...
/*
let divElement=document.querySelector("div");
console.log(divElement.innerText);
console.log(divElement.textContent);
console.log(divElement.innerHTML);
*/
// Eg:4 // It's used to the create the elements in DOM...
/*
let body=document.body;
let divElement=document.createElement("div");
let h1Element=document.createElement("h1");
h1Element.innerText="Welcome to Javascript";
divElement.append(h1Element);
body.append(divElement);
*/
//Eg:5 It's using html code in FName & LName...
/*
let divElement=document.querySelector("div");
let FName=document.querySelector("#FName");
let LName=document.querySelector("#LName");
console.log(FName);
console.log(LName);
FName.remove(); // It's removed the FName...
LName.remove(); // It's removed the LName...
divElement.append(FName); // It's added the FName...
divElement.append(LName); // It's added the LName...
console.log(FName.getAttribute("value")); // getAttribute: It's used to get the value...
console.log(LName.getAttribute("value")); // getAttribute: It's used to get the value...
FName.setAttribute("id", "FirstName"); // setAttribute: It's used to replace the value of id...
LName.setAttribute("id", "LastName"); // setAttribute: It's used to replace the value of id...
LName.removeAttribute("value"); // removeAttribute: It's used to removed the value...
*/
// Eg:6 // It's used to the html span tag code...
/*
let MyName=document.querySelector("#MyName");
MyName.classList.add("MyClass"); // It's added to the class...
MyName.classList.remove("MyClass"); // It's remove to the class...
MyName.classList.toggle("MyClass",false); // toggle: It's used to remove the class value...
MyName.classList.toggle("Class-1",false); // toggle: It's used to remove the class value...
*/
// Eg:7
let Name=document.querySelector("#Name");
Name.style.color="yellow";
Name.style.backgroundColor="black";