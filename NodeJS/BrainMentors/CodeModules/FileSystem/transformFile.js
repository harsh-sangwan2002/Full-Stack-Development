const fs = require('fs');
const zlib = require('zlib');

const bigFile = '/Users/harshsangwan/Desktop/Node-JS-Recordings/2021/November/5/1.mkv';

const readStream = fs.createReadStream(bigFile).pipe(zlib.createGzip()).pipe(fs.createWriteStream('1.mkv.gz'));

console.log(readStream);