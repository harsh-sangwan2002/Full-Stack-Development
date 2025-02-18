const fs = require('fs');

// readFile
fs.readFile('file1.txt', (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

const content = "Hello World!"

fs.writeFile('example.txt', content, err => console.log(err))

// fs.rename('example.txt', 'example2.txt', err => console.log(err))

// fs.unlink('example2.txt', err => console.log(err))


fs.appendFile('example.txt', content, err => console.log(err))