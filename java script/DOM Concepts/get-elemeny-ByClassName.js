// getelementbyclassname:
var elements=document.getElementsByClassName("example");
for(i=0;i<elements.length;i++){
 elements[i].innerHTML="This text has been changed";
}
let datas=document.getElementsByClassName("MyClass");
for(i=0;i<datas.length;i++){
 datas[i].style.backgroundColor="black";
 datas[i].style.color="yellow";
}
var elements=document.getElementsByClassName("OldClass");
for(i=0;i<elements.length;i++){
 elements[i].classList.add("NewClass"); // Added to the class...
}
var elements=document.getElementsByClassName("OldClass");
for(i=0;i<elements.length;i++){
 elements[i].classList.remove("NewClass"); // removed to the class...
}
var elements=document.getElementsByClassName("OldClass");
for(i=0;i<elements.length;i++){
 elements[i].classList.toggle("NewClass"); // Recently added or removed to the class type again show to the elements in browser...
}
function ChangeImage(){ // setAttribute: It's used to replaced and stored the value of attribute...
 var ImgElements=document.getElementsByClassName("MyImage")
 for(i=0;i<ImgElements.length;i++){
 
ImgElements[i].setAttribute("src","https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain");
 }
}