const fs = require('fs');

console.log("A");

fs.readFile('./async.js', (err, data) => {
    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

console.log("B");