// process.stdout.write("Enter your name: \n");
// process.stdout.on('data', chunk => {
//     console.log(chunk.toString());
// })

const prompt = require('prompt-sync')();
let name = prompt('Enter your name: ');
console.log("My name is: ", name);