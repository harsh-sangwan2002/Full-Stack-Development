const fs = require('fs');
const bigFile = '/Users/harshsangwan/Desktop/Node-JS-Recordings/2021/November/5/1.mkv';

const readStream = fs.createReadStream(bigFile, { highWaterMark: 90000 });

// source.pipe(target)
readStream.pipe(process.stdout);

// readStream.on('open', () => {
//     console.log("Stream is open");
// })

// readStream.on('data', (chunk) => {
//     console.log("Reading data");
//     console.log(chunk.toString());
// })

// readStream.on('end', () => {
//     console.log("Stream is ended");
// })

// readStream.on('close', () => {
//     console.log("Stream is closed");
// })

// readStream.on('error', (err) => {
//     console.log("Error: ", err);
// })