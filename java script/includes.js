// Includes method in Javascript
// Eg:1
let product=["Mobile", "Laptop", "iPhone", "iPad", "Macbook"];
console.log(product);
let result1=product.includes("Laptop");
console.log(result1);
let result2=product.includes("Samsung");
console.log(result2);
let result3=product.includes("Macbook");
console.log(result3);
// Eg:2
let StudentInfo=[
 {SId:1001, SName:"Ajay"},
 {SId:1001, SName:"Barath"},
 {SId:1001, SName:"Mohammed"},
 {SId:1001, SName:"Ram"},
 {SId:1001, SName:"Karthi"},
];
let data=StudentInfo.map((mydata)=>{
 return mydata.SName;
});
console.log(data);
function CheckStudentName(Name){
 if(data.includes(Name)){
 console.log(`The student Name ${Name} is available...`)
 }
 else{
 console.log(`The student Name ${Name} is not available...`)
 }
}
CheckStudentName("Ajay");