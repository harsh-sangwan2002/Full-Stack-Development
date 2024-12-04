/************** Object , Map -> store data in key, value pair  ***********/
const print = console.log;
// a. object
let cap = {
    name:"Steve",
    occupation:"Software Engineer",
    age:21,
}
cap.newProp = "Hello";
delete cap.name;

console.log(cap);

let arrKeys = Object.keys(cap);
console.log(arrKeys);

// b. map
const personMap = new Map();

personMap.set('name','Jasbir');
personMap.set('age',35);
personMap.set('occupation',"Software Engineer");

personMap.delete('name');

print(personMap);
print(personMap.has('age'));
print(personMap.size);

personMap.forEach((val,key)=>{
    console.log(key,val);
});