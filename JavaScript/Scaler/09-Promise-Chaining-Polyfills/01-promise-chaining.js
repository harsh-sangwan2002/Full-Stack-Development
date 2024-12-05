// Solving Promise-Hell and callBack-Hell
const fs = require('fs').promises;

fs.readFile('f1.txt')
    .then(data => {
        console.log(data.toString());
        return fs.readFile('f2.txt');
    }).then(data2 => {
        console.log(data2.toString());
        return fs.readFile('f3.txt');
    }).then(data3 => {
        console.log(data3.toString());
    }).catch(err => {
        console.log(err);
    })