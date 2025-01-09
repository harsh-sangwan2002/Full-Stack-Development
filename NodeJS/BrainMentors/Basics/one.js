const fs = require('fs');

var a = 10, b = 20, c = a + b;
const path = "/Users/harshsangwan/Desktop/Full-Stack-Development/NodeJS/BrainMentors/Basics/content.txt";

fs.readFile(path, (err, data) => {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

console.log(c);