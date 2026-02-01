//Array concat.js:
// concat array method in Javascript
// Eg:1
var cart1=["Samsung", "Vivo", "Oneplus", "Redmi", "Realme"];
var cart2=["Laptop", "iPad", "iPhone", "Macbook"];
var data=cart1.concat(cart2);
console.log(data);
// Eg:2
var cart1=[10, 20, 30, 40, 50];
var cart2=["Ram", "Ajay", "Barath"];
var data=cart1.concat(cart2);
console.log(data);
// Eg:3
var data1=[[1,2,3,4,5],["Ajay", "Sudhagar", "Barath"]];
var data2=["Sathya", "Sasi"];
var data=data1.concat(data2);
data1[0].push(10);
data1[1].push("Ajay Kumar");
console.log(data);
// Eg:4
var arrObj1=[
 {PId:1001, PName:"Samsung", Price:15000},
 {PId:1002, PName:"Oneplus", Price:20000}, 
];
var arrObj2=[
 {PId:1003, PName:"iPad", Price:25000},
 {PId:1004, PName:"iPhone", Price:85000}, 
];
var data=arrObj1.concat(arrObj2);
console.log(data);