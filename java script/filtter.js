// Filter array method in Javascript
// Eg:1
var users=["Ajay", "Barath", "Mohammed"];
var result=users.filter(function(info){
 if(info=="Ajay"){
 return info;
 }
});
console.log(result);
// Eg:2
var data=[10, 20, 30, 40, 50];
var output=data.filter(function(info){
 if(info%2==0){
 return info;
 }
});
console.log(output);
// Eg:3
var StudentInfo=[
 {RollNo:1000, Name:"Ajay", Dept:"Bioinfo"},
 {RollNo:1001, Name:"Barath", Dept:"Science"},
 {RollNo:1002, Name:"Mohammed", Dept:"Biology"},
 {RollNo:1003, Name:"Sudhagar", Dept:"Computer"},
]; 
var result=StudentInfo.filter(function(info){
 if(info.RollNo==1000){
 return info;
 }
});
console.log(result);
// Eg:4
var StudentInfo=[
 {RollNo:1000, Name:"Ajay", Mark:1195},
 {RollNo:1001, Name:"Barath", Mark:850},
 {RollNo:1002, Name:"Mohammed", Mark:1140},
 {RollNo:1003, Name:"Sudhagar", Mark:900},
]; 
var result=StudentInfo.filter(function(info){
 return info.Mark>=1100 && info.Mark<=1200;
});
console.log(result);