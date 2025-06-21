const fs = require('fs');

/************************ Question-1
 * You can block the main thread. 
 * Give me concatenated result in the order of file supplied ***********************/

console.log("Before");

const buffer = fs.readFileSync('f1.txt');
const buffer2 = fs.readFileSync('f2.txt');

console.log(buffer.toString());
console.log(buffer2.toString());

console.log("After");

/************************ Question-2
 * You don't have to block the main thread.
 * Give me concatenated result in the order of file supplied ***********************/

console.log("Before");

fs.readFile('f1.txt', (err, data) => {
    if (err)
        console.log(err);

    else
        console.log(data.toString());
})
fs.readFile('f2.txt', (err, data) => {
    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

console.log("After");

/***************
 * 1. You do not have to block the main thread 
 * 2. Given  2 files -> read them  and 
 * 3. Give me the concatenated result in the order for the file supplied
 *****************/

console.log("Before");

fs.readFile('f1.txt', f1cb);

function f1cb(err, content_1) {

    if (err)
        console.log(err);

    else
        fs.readFile('f2.txt', f2cb);

    function f2cb(err, content_2) {

        if (err)
            console.log(err);

        else
            console.log("Content is: " + content_1 + content_2);
    }
}

console.log("After");