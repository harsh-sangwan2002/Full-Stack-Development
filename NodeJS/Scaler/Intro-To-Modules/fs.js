const fs = require('fs');

// 1. Reading a file
// fs.readFile('./fs.js', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
// });

// 2. Writing a file 
// fs.writeFile('./output.txt', 'Hello, World!', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }
//     console.log('File written successfully');
// });

// 3. Renaming a file
// fs.rename('./output.txt', './renamed.txt', (err) => {
//     if (err) {
//         console.error('Error renaming file:', err);
//         return;
//     }
//     console.log('File renamed successfully');
// });

// 4. Deleting a file
// fs.unlink('./renamed.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return;
//     }
//     console.log('File deleted successfully');
// });

// 5. Info of a file
fs.stat('./fs.js', (err, stats) => {
    if (err) {
        console.error('Error getting file stats:', err);
        return;
    }
    console.log('File stats:', stats.isDirectory());
});

// 6. Creating a directory
// fs.mkdir('./newDir', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//         return;
//     }
//     console.log('Directory created successfully');
// });

// 7. Check if a directory exists
if (fs.existsSync('./newDir')) {
    console.log('Directory exists');
}

// 8. Accessing a directory
fs.access('./newDir', fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error('No access to directory:', err);
        return;
    }
    console.log('Access to directory granted');
});