// Flat function method in Javascript
// 1.) flat() [It's used to remove the first array brackets...]
// Eg:1
let data1=[1,[2,3,4],5];
let flattenedData=data1.flat();
console.log(flattenedData);
//Eg:2
let data2=[1,[2,[3],4],5];
let flattenedData1=data2.flat(2); // 2 is called as a how many array brackets are removed...
console.log(flattenedData1);
//Eg:3
let data3=[1,[2,[[3]],4],5];
let flattenedData2=data3.flat(3); // 3 is called as a how many array brackets are removed...
console.log(flattenedData2);
//Eg:4
let data4=[1,,3,,5];
let flattenedData3=data4.flat();
console.log(flattenedData3);
// 2.) flatMap() [It's used to separate or map the some specified characters...]
let cart=[
 {PId:1001, Category:"Mobile", PName:["Samsung", "Asus", "OnePlus"]},
 {PId:1002, Category:"Mobile", PName:["Oppo", "Vivo"]},
 {PId:1003, Category:"Mobile", PName:["iPhone", "Redmi", "Realme"]},
];
// First method in flatmap
let result=cart.map(function(data){
 return data.PName;
}).flat();
console.log(result);
// Second method in flatmap
let output=cart.flatMap(function(data){
 return data.PName;
});
console.log(output);