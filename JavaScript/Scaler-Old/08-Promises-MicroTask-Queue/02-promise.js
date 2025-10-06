const fs = require('fs').promises;

console.log("Before");

const promise = fs.readFile('f1.txt');
console.log(promise);

setTimeout(()=>{
    console.log(promise);
},3000);

console.log("After");