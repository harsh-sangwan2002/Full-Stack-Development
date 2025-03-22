let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literal
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String properties & methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access value by key
x = s[1];

x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('ll');

x = s.substring(0,4);

x = s.substring(7);

x = s.slice(-11,-6);

x = '   Hello World';
x = x.trim();

x = s.replace('World','John');

x = s.includes('Hell');

x = s.valueOf();

x = s.split(' ');

console.log(x);