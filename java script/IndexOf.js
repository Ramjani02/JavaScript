/* 
 IndexOf()
 LastIndexOf()
*/
let product=["Mobile", "Laptop", "iPhone", "iPad", "iPad", "Macbook", "Macbook"];
console.log(product);
let inx=product.indexOf("iPhone");
console.log("Index Value : ", inx);
product[inx]="Smart Watch";
console.log(product);
let Linx=product.lastIndexOf("iPad");
console.log("Last Index : ", Linx);