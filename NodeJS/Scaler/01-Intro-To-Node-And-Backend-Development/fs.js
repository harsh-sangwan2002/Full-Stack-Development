// fs module is used to read/write file
const fs = require('fs');

fs.readFile('file1.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

const content = 'Hello! I am file2.txt';
fs.writeFile('file2.txt', content, err => {

    if (err)
        console.log(err);
});

// fs.rename('file2.txt', 'file3.txt', err => {

//     if (err)
//         console.log(err);
// })

// fs.unlink('file.txt', err => {

//     if (err)
//         console.log(err);
// })

fs.stat('dir', (err, stats) => {
    if (err)
        console.log(err);

    else {
        console.log(stats.size);
        console.log(stats.isDirectory());
    }
})

let dirName = "my-dir";
// fs.mkdir(dirName,err=>{

//     if(err)
//         console.log(err);
// })

// fs.rmdir(dirName, err => {

//     if (err)
//         console.log(err);
// })

dirName = './dir';
if (fs.existsSync(dirName)) {
    console.log("Dir is available");
}
else {
    console.log("Dir doesn't exist.");
}