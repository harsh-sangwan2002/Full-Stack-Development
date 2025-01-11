const fs = require('fs');
const path = require('path');

var a = 10, b = 20, c = a + b;
const fullPath = path.join(__dirname, 'sample.txt');

fs.readFile(fullPath, (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

console.log(c);