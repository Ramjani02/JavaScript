function myFunction(){
 alert("Message-1");
}
function myFunction(){
 alert("Message-2");
}
// Eg:1
/*
var element=document.querySelector("#myBtn");
element.addEventListener("click", ()=>{
 alert("Event-1");
});
element.addEventListener("click", ()=>{
 alert("Event-2");
});
element.addEventListener("click", ()=>{
 alert("Event-3");
})
*/
// Eg:2
var element=document.querySelector("#myBtn");
element.addEventListener("click", myEvent1);
function myEvent1(){
 alert("Event-1");
}
element.addEventListener("click", myEvent2);
function myEvent2(){
 alert("Event-2");
}
element.addEventListener("click", myEvent3);
function myEvent3(){
 alert("Event-3"); 
} 
element.removeEventListener("click", myEvent2);
element.removeEventListener("click", myEvent1);