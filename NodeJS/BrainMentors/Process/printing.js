const util = require('util');

var myName = "Harsh";
console.log("My name is: %s", myName);

var result = util.format('My name is: %s', myName);
console.log(result);

const obj = {
    name: "Amit",
    courses: {
        sections: {
            content: {
                text: 'JavaScript',
                format: {
                    webformat: {
                        json: {
                            a: 10, b: 20
                        }
                    }
                }
            }
        }
    }
}

console.dir(obj, { depth: 6 });
console.log(obj);