// Push, Pop, Shift, Unshift, Splice method in Javascript
// 1.) push: It's used to an added to the end of the array. 
var cart=["OPPO", "Samsung", "Vivo", "OnePlus"];
console.log(cart);
var count=cart.push("iPhone", "Realme");
console.log("Number of Product: "+count);
console.log(cart);
// 2.) pop: It's used to an remove to the end of the array.
var count=cart.pop()
console.log(count);
console.log(cart);
// 3.) unshift: It's used to an added to the beginning of the array. 
cart.unshift("Laptop");
console.log(cart);
// 4.) shift: It's used to an remove to the beginning of the array. 
cart.shift();
console.log(cart);
// 5.) splice: It's remove or splicing the element.
cart.splice(2, 0, "Redmi"); // 2 is a index, 0 is a nothing.
console.log(cart);
cart.splice(3, 2, "iPad"); // 3 is a index, 2 is a removed the items.
console.log(cart);