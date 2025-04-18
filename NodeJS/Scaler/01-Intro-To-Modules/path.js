const path = require('path');

// 1. join
let fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(fullPath);

// 2. resolve
fullPath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(fullPath);

// 3. basename
let basename = path.basename(fullPath);
console.log(basename);

// 4. dirname
let dirname = path.dirname(fullPath);
console.log(dirname);

// 5. extname
let extname = path.extname(fullPath);
console.log(extname);

// 6. parse
let parsedPath = path.parse(fullPath);
console.log(parsedPath);

// 7. normalize
let normalizedPath = path.normalize('folder//subfolder/../file.txt');
console.log(normalizedPath);

// 8. isAbsolute
let isAbsolutePath = path.isAbsolute(fullPath);
console.log(isAbsolutePath);