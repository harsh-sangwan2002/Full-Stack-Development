let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

// string representation of decimal
// 2 digits after decimal
x = num.toFixed(2); 

// 2 digits in total
x = num.toPrecision(2);

x = num.toExponential(2);

x = num.toLocaleString('en-US');

console.log(x);