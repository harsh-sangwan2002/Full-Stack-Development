const fs = require('fs').promises;

function cb1(data) {

    console.log(data.toString());
    return fs.readFile('f2.txt');
}

function cb2(data) {

    console.log(data.toString());
    return fs.readFile('f3.txt');
}

function cb3(data) {
    console.log(data.toString());
}

fs.readFile('./f1.txt', 'utf8')
    .then(cb1)
    .then(cb2)
    .then(cb3)
    .catch(err => {
        console.error('Error reading files:', err);
    });
