// Eg:1
/*
var btnSubmit=document.querySelector("#btnSubmit");
var btnClear=document.querySelector("#btnClear");
btnSubmit.addEventListener("click",()=>{
 var Uname=document.querySelector("#uname").value;
 var Address=document.querySelector("#address").value;
 var result1=document.querySelector("#result1");
 var result2=document.querySelector("#result2");
 result1.innerHTML="Username :"+Uname;
 result2.innerHTML="Address :"+Address;
});
*/
// Eg:2
var btnSubmit1=document.querySelector("#btnSubmit");
var btnClear1=document.querySelector("#btnClear");
btnSubmit1.addEventListener("click",()=>{
 var Uname=document.querySelector("#uname").value;
 var Address=document.querySelector("#address").value;
 var body=document.body;
 var Runame=document.createElement("h3");
 var Raddress=document.createElement("h3");
 Runame.innerHTML="Username :"+Uname;
 Raddress.innerHTML="Address :"+Address;
 body.append(Runame, Raddress);
});
btnClear1.addEventListener("click",()=>{
 document.querySelector("#uname").value="";
 document.querySelector("#address").value="";
})