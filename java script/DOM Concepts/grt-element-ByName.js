function myGender(){
var gender=document.getElementsByName("gender")
count=0;
gender.forEach((gen)=>{
if(gen.checked){
alert(gen.value);
count=1;
}
});
if(count==0){
alert("Please select any one option...");
}
}
function myMobile(){
var mobile=document.getElementsByName("mobile")
count=0;
mobile.forEach((mobile)=>{
if(mobile.checked){
alert(mobile.value);
count=1;
}
});
if(count==0){
alert("Please select any one option...");
}
}