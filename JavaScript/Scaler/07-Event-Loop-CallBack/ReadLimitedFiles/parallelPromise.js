const fs = require('fs').promises;

let f1Read = fs.readFile('f1.txt');
let f2Read = fs.readFile('f2.txt');
let f3Read = fs.readFile('f3.txt');

f1Read.then(data=>{
    console.log(data.toString());
}).catch(err=>{
    console.log(err);
})

f2Read.then(data=>{
    console.log(data.toString());
}).catch(err=>{
    console.log(err);
})

f3Read.then(data=>{
    console.log(data.toString());
}).catch(err=>{
    console.log(err);
})