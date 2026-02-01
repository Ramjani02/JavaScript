function changeText(){
 var element=document.querySelector("#myID");
 element.innerText="JavaScript Tutorial";
}
function getInput(){
 var UName=document.querySelector("#uname");
 var EMail=document.querySelector("#email");
 
 var body=document.body
 var RName=document.createElement("h3");
 var Remail=document.createElement("h3");
 RName.innerText="UserName :"+UName.value;
 Remail.innerText="E-Mail :"+EMail.value;
 body.append(RName);
 body.append(Remail);
}