/**
 * Inbuilt Errors in Javascript
 * -> Syntax error
 *
 * try catch only works with run time Error
 * -> Runtime error -> only get to know after exceuting the code and it will
 * only fail on the where we have made the error
 * 
 *  -> TypeError
 *  -> reference Error
 *  -> Range Error
 * **/


/************* Syntax error code does not execute at all ************/
// 1.  Unexpected identifier
// console.log("Hello");
// le a;

// 2.  Illlegal Shadowing : Identifier 'a' has already been declared
// console.log("a");
// let a = 10
// {
//     var a = 20;
//     console.log("Hello", a);
// }

// Work like a charm.
// var a = 10
// {
//     let a = 20;
//     console.log("Hello", a);
// }

/********************** Run-time Errors ************************/
/***
 * Reference Error
 * ***/
// 1. TDZ -> temporal Dead Zone, ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 10;
// console.log("Before");

// 2. ReferenceError: fn is not defined
// fn();

// 2.1 when you accessing a prop for which object does not exist
// console.log(obj.a);

// 3. ReferenceError: a is not defined (in strict mode if a variable is not defined)
// "use strict";
// a = 10
// console.log(a);

/*********** Range error ******/
// 1. RangeError: Maximum call stack size exceeded stackoverflow.
// infinite recursion
// function foo() {
//     foo();
// }
// foo();

// 2. array size RangeError: Invalid array length, Max allowed length: (2 ^ 32 - 1)
// let a = [];

// a.length = 2 ** 32 - 1;  // Max allowed length
// a.length = 2 ** 32;
// console.log(a.length);

/*****
 * Type error:
    * 1. whenever a method is called and it does not exist
    * 2. when you accessing a prop for which  object is undefined
 * *****/

// 1. TypeError: num.toUpperCase is not a function
// let num = 10;
// console.log(num.toUpperCase());

// 2.TypeError: Cannot read properties of undefined (reading 'a')
// "use strict";
// function fn(){
//     console.log(this);
//     console.log(this.rajneesh);
// };
// fn();


// "use strict";
// function fn() {
//     let string = "hello";
//     // console.log(string.toUpperCase());
//     // console.log(string.abc());
//     // console.log(string.abc);

//     // console.log(string.abc.def);

//     // console.log(this);
//     // console.log(this.abc);
// }
// fn();
