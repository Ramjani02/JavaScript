// getelementbyid:
function changeText(){
 let textElement=document.getElementById("myText");
 textElement.innerHTML="Ajay InfoTech";
}
var myDiv=document.getElementById("myDiv");
myDiv.style.backgroundColor="red";
var myButton=document.getElementById("myButton");
myButton.addEventListener("click",function(){
 alert("Button clicked");
})
var myButton=document.getElementById("myBtn");
myButton.addEventListener("click",function(){
 var data=document.getElementById("myInput");
 alert(data.value);
})
function myFunction(){
 var myCheckBox=document.getElementById("myCheckBox");
 if(myCheckBox.checked){
 alert("Checkbox is Checked");
 }else{
 alert("Checkbox isn't Checked");
 }
}
function changeImage(){
 var myImg=document.getElementById("myImg");
 
myImg.src="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=4608&h=3072&rs=1&pid=ImgDetMain";
}