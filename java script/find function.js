// Find function method in Javascript
// 1.) find() [It's used to take the first set of matching items...]
var ProductInfo=[
 {PId:1001, PName:"Mobile", Price:15000},
 {PId:1002, PName:"iPhone", Price:80000},
 {PId:1003, PName:"Laptop", Price:50000},
 {PId:1004, PName:"iPad", Price:25000},
];
var result=ProductInfo.find(info=>{
 return info.Price>=20000;
});
console.log(result);
// 2.) findIndex() [It's used to find the start index of the position...]
var result=ProductInfo.findIndex(info=>{
 return info.Price>=20000;
});
console.log("Product Index: "+result);
// 3.) findLast() [It's used to find the last set of element...]
var result=ProductInfo.findLast(info=>{
 return info.Price>=10000;
});
console.log(result);
// 4.) findLastIndex() [It's used to find the last index of the position...]
var result=ProductInfo.findLastIndex(info=>{
 return info.Price>=10000;
});
console.log("Product Index: "+result);