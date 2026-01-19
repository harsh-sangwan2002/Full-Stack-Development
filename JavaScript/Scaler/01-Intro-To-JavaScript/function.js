// 1. Function declaration
function printName(firstName, lastName) {
    // String interpolation -> To access a variable we can use ${}
    console.log(`My name is ${firstName} ${lastName}`);
}

printName("Hitesh", "Choudhary");
console.log(typeof printName);
console.log(printName instanceof Function);