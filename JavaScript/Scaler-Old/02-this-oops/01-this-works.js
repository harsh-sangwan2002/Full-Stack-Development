// statement 1 ----------------------------------------
// Native object and a Host object.

/*
    Environment:
        Host object:
            Browser -> [window, document, localStorage]
            Nodejs -> [global, os, process]

    JavaScript:
        Native Object:
           [Date, JSON, Object]
*/


// Global Area
// GEC -> Var will go to global object.
// All the var and non data type variables are become part of window at the time of compilation. 
// Because of that we are able to access these variables before its decalrtion.
var firstVal = "Steve";
var firstVal2 = "Rogers";
let secondVal = "Loki";
// console.log("First: ", window.firstVal);
// console.log("second: ", secondVal);
// console.log(window);
// console.log(this);

let cap = {
    // property
    firstName: "Steve",
    // method
    sayHi: function () {
        console.log("Hi from", this.firstName);
    }
}
// cap.sayHi(); // Steve
let sayHiAdd = cap.sayHi;
var firstName = "Loki";
// sayHiAdd(); // Loki


// Rules for this:
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object, Example: cap.sayHi()
// EC is created with -> function call -> this will be that window, Example: let a =  cap.sayHi and then a(). 

/********************** Question-2 ******************/
let cap2 = {
    firstName: "Steve",
    sayHi: function (param) {
        console.log("52", this.firstName); // Steve
        const iAmInner = function (param) {
            console.log("54", this.firstName); // Loki
        }
        // EC by this kind of call -> window
        iAmInner(20);
    }
}

// EC by this -> cap
// cap2.sayHi(10);

/***************** Question-3 *******************/
// var -> GEC 
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
// cap3.sayHi();

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window
// Arrow function doesn't bother about above rules -> it takes `this` from outside(nearest scope)

// GEC -> window -> window.firstName
/***************** Question-4 *******************/
var firstName = "Thanos";
let cap4 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("91", this.firstName); // Steve
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName); // Steve
            const iAmInner = () => {
                console.log("95", this.firstName); // Steve
            }
            iAmInner();
        }
        subInner();
    }
}
// cap4.sayHi();

/***************** Question-5 *******************/
var firstName = "Thanos";
let cap5 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("109", this.firstName); // Steve
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName); // Steve
            const iAmInner = function () {
                console.log("114", this.firstName); // Thanos
                const iAmSuperInner = () => {
                    console.log("117", this.firstName); // Thanos
                }
                iAmSuperInner();
            }
            iAmInner();
        }
        subInner();
    }
}
cap5.sayHi();