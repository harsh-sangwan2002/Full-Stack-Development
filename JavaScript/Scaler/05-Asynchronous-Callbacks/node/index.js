const fs = require('fs');

console.log('A');

fs.readFileSync('f1.txt', (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

console.log('C');