// forEach() vs map() in Javascript
var data=[
 {PName:"Mobile", Price:10000},
 {PName:"Laptop", Price:80000},
 {PName:"Earbuds", Price:5000},
 {PName:"Tablet", Price:30000},
];
// This forEach functions doesnot return the values...
console.log("forEach methods")
var result=data.forEach((value)=>{
 console.log(value.Price);
 return value.Price;
});
console.log(result);
// This map functions return the values...
console.log("map methods")
var result=data.map((info)=>{
 console.log(info.PName);
 return info.PName;
});
console.log(result);