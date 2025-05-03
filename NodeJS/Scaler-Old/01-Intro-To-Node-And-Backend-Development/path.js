const path = require('path');

const fullPath = path.join("folder", "subfolder", "file.txt");
console.log(fullPath);

const absolutePath = path.resolve(fullPath);
console.log(absolutePath);

let fileName = path.basename('./dir/file1.txt');
console.log(fileName);

let extName = path.extname('./dir/file1.txt');
console.log(extName);

const dirName = path.dirname('./dir/file1.txt');
console.log(dirName);

const pathInfo = path.parse('./dir/file1.txt');
console.log(pathInfo);

const normalizedPath = path.normalize('/path/to/../dirName');
console.log(normalizedPath);