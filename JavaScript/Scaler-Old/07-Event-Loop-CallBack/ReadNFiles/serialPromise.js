const fs = require('fs').promises;

const files = ['f1.txt', 'f2.txt', 'f3.txt'];

let fileReadPromise = fs.readFile(files[0]);

for (let i = 1; i < files.length; i++) {

    fileReadPromise = fileReadPromise.then(data => {
        console.log(data.toString());
        return fs.readFile(files[i]);
    })
}

fileReadPromise.then(data => {
    console.log(data.toString());
})