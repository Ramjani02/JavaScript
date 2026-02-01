function changeClass(){
 var elements=document.getElementsByTagName("h1");
 for(i=0;i<elements.length;i++){
 elements[i].className="MyClass";
 }
}
function hideImage(){
 var elements=document.getElementsByTagName("img");
 for(i=0;i<elements.length;i++){
 elements[i].style.display="none";
 }
}
function changeImage(){
 var elements=document.getElementsByTagName("img");
 for(i=0;i<elements.length;i++){
 elements[i].src="https://th.bing.com/th/id/OIP.h6lj7H￾QfzG_F2TyXicHqwHaD4?rs=1&pid=ImgDetMain";
 }
}