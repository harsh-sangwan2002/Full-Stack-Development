function calculator(num1, num2, op) {

    let res;

    switch (op) {
        case '+': {
            res = num1 + num2;
            break;
        }
        case '-': {
            res = num1 - num2;
            break;
        }
        case '*': {
            res = num1 * num2;
            break;
        }
        case '/': {
            res = num1 / num2;
            break;
        }
        default:{
            res = new Error('Cannot perform the required operation.');
        }
    }

    return res;
}

console.log(calculator(10,5,'+'));
console.log(calculator(10,5,'-'));
console.log(calculator(10,5,'*'));
console.log(calculator(10,5,'/'));
console.log(calculator(10,5,'&'));