const fs = require('fs');
const srcFilePath = './dir/file1.txt';
const destFilePath = './dir/file2.txt';

const readStream = fs.createReadStream(srcFilePath);
const writeStream = fs.createWriteStream(destFilePath);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
})

readStream.on('end', () => {
    console.log("Stream end");
})

readStream.on('error', err => {
    console.log(err);
})