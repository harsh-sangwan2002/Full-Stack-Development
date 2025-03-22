const fs = require('fs').promises;

const files = ['f1.txt', 'f2.txt', 'f3.txt'];

for (let file of files) {
    let readFilePromise = fs.readFile(file);
    readFilePromise.then(cb)
        .catch(err => {
            console.log(err);
        });
}

function cb(data) {
    console.log(data.toString());
}