// MAP METHODS:
/* 1.) Arrow Function:
 map((element) => {...})
 
 2.) Callback Function:
 map(callbackFun)
 function callbackFun(element){...}
 3.) Inline Callback Function:
 map(function(element){...})
*/
console.log("Mapping Arrow Function");
var data=[10, 20, 30, 40, 50];
var result=data.map((item)=>{
 console.log(item);
 return item;
});
console.log(result);
var marks=[40, 34, 75, 20, 99];
var output=marks.map((mark)=>{
 var result=mark>=35 ? "PASS" : "FAIL";
 return result;
})
console.log(output);
console.log("Mapping Callback Function");
var datas=[100, 200, 300, 400, 500];
var result=datas.map(display);
function display(items){
 // console.log(items);
 return items;
}
console.log(result);
// Mapping callback functions object type
var users=[
 {firstName:"Ram", lastName:"Kumar"},
 {firstName:"Sam", lastName:"Kumar"},
 {firstName:"Vel", lastName:"Murugan"},
];
var fullname=users.map(getFullName);
function getFullName(item){
 return item.firstName+" "+item.lastName;
}
console.log(fullname);
console.log("Mapping Inline Callback Function");
var data=[10, 20, 30, 40, 50, 60];
var result=data.map(function(item){
 return item;
});
console.log(result);