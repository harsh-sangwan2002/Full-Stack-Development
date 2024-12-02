// Function declaration -> Function hoisting
console.log(addDollarSign(100));
function addDollarSign(value) {
    return '$' + value;
}

// Function expression -> Variable hoisting
const addPlusSign = function (value) {
    return '+' + value;
}
console.log(addPlusSign(200));