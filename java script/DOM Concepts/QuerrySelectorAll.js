setTimeout(()=>{
 let elements=document.querySelectorAll(".myClass");
 elements[0].style.color="red";
 elements[1].style.color="red";
},3000);
var Samsung=document.querySelectorAll("#samsung");
Samsung.forEach((data)=>{
 console.log(data.innerText);
});
var iPhone=document.querySelectorAll("#iphone");
iPhone.forEach((data)=>{
 console.log(data.innerText);
});
var buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
 button.addEventListener("click",()=>{
 alert(button.value+" clicked");
 });
});