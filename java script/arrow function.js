//Arrow functions.js:
// Arrow Functions:
// 1.) Default Functions:
console.log("Default Function");
function myFun(){
 console.log("This is Default Javascript Function.");
}
myFun();
function myName(Name){
 console.log("Hello "+Name);
}
myName("Ajay");
// 2.) Anonymous Functions:
console.log("Anonymous Function");
var MyFun=function(){
 console.log("This is Anonymous Function. ");
}
MyFun();
var MyFun=function(Name){
 console.log("Hello "+Name);
}
MyFun("Barath");
// 3.) Arrow Functions:
console.log("Arrow Function");
var MyFun=()=>{
 return "This is Arrow Function.";
}
console.log(MyFun());
var MyFun=(Name)=>{
 console.log("Hello " +Name);
}
MyFun("Mohammed");
var MyFun=(Name1, Name2)=> "Hello "+Name1+" and "+Name2;
console.log(MyFun("Ajay Kumar", "Akshay Kumar"));
var MyFun=Name=>({MyName:Name});
console.log(MyFun("Sam Kumar"));
var MyFun=(Name, Address) => {
 var data=({MyName:Name, MyAddress:Address});
 console.log(data);
 console.log(data.MyName, data.MyAddress);
};
MyFun("Barath", "Salem");