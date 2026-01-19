// // The keywords which are used to declare the variables are let, var and const
// 1. number
let a = 10;
// // to check the data-type of a variable, we use typeof operator
console.log(typeof a); // number
console.log(a); // 10

// 2. string
a = "String";
console.log(a);
console.log(typeof a);

// 3. boolean
a = true;
console.log(a);
console.log(typeof a);

// 4. null 
a = null;
console.log(a);
console.log(typeof a); // object -> It's a bug in JS

// 5. undefined
let b;
console.log(b);
console.log(typeof b);

// 6. bigint
a = 1237862367786n;
console.log(a);
console.log(typeof a);

// 7. symbol
a = Symbol('123');
console.log(a);
console.log(typeof a);