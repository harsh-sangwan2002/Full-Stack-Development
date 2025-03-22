// Do't put 'strict' and 'un strict' in same file.

"use strict"

// varName_1 = "Senthil";
// window.varName_1 = "Surya";
// console.log(varName_1);

// varName_2 = "Natasha";   // This will throw a error.
// window.varName = "Minakshi";
// console.log(varName);

// // Var belong to window.
// var aravinth = "_aravinth_";
// console.log(window.aravinth);
// console.log(window);

/***************** Question-1 *******************/
let cap = {
    // property
    firstName: "Steve",
    // method
    sayHi: function () {
        console.log(this)
        // console.log("Hi from ", this.firstName); // TypeError
    }
}

cap.sayHi();
let sayHiAdd = cap.sayHi;
var firstName = "loki";
// sayHiAdd(); // you will get hit by error, this = undefined.  

/***************** Question-2 *******************/
let cap2 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("47", this.firstName);
        const iAmInner = function () {
            // console.log("49", this.firstName); // TypeError
        }
        // EC by this kind of call -> undefined
        iAmInner();
    }
}

// EC by this -> ?? -> cap
cap2.sayHi();

/***************** Question-3 *******************/
"use strict"
let cap3 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName); // Steve
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const iAmInner = () => {
            console.log("55", this.firstName); // Steve
        }
        iAmInner();
    }
}
cap3.sayHi();

/***************** Question-4 *******************/
let cap4 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("91", this.firstName); // Steve
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName); // Steve
            const iAmInner = () => {
                console.log("95", this.firstName); // Steve

                const iAmSupperInner = function () {
                    console.log("49", this.firstName); // TypeError
                }

                iAmSupperInner();
            }
            iAmInner();
        }
        subInner();
    }
}
// cap4.sayHi();