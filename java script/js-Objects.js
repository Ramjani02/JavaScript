//javascript object.js:
/* Javascript objects:
Object = {property-1:value-1, property-2:value-2}
*/
let Address={
 Name:"Ajay",
 Age:22,
 Dept:"Bioinformatics",
 District:{
 District1:"Trichirappalli",
 District2:"Salem",
 District3:"Erode",
 }
};
Address.Age=30; // It's replacable in objects...!
console.log(Address);
console.log(typeof(Address));
document.write("<h2> Accessing a value using dot notation </h2>");
document.write("<h2>"+Address.Name+"</h2>");
document.write("<h2>"+Address.Age+"</h2>");
document.write("<h2>"+Address.Dept+"</h2>");
document.write("<h2>"+Address.District+"</h2>");
document.write("<hr/>")
document.write("<h2> Accessing a value using bracket notation </h2>");
document.write("<h2>"+Address["Name"]+"</h2>");
document.write("<h2>"+Address["Age"]+"</h2>");
document.write("<h2>"+Address["Dept"]+"</h2>");
document.write("<h2>"+Address["District"]+"</h2>");
document.write("<hr/>")
document.write("<h2> Accessing a keys and values notation </h2>");
document.write("<h2>"+Object.keys(Address.District)+"</h2>");
document.write("<h2>"+Object.keys(Address)+"</h2>");
document.write("<h2>"+Object.values(Address)+"</h2>");
document.write("<h2>"+Object.values(Address.District)+"</h2>");