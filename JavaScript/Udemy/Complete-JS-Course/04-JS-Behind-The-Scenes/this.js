'use strict'

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    // 1. undefined in strict-mode
    // 2. window/global object in non-strict-mode
    console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // window/global object in both modes
    console.log(this);
}
calcAgeArrow(1991);

const jonas = {
    birthYear: 1991,
    calcAge: function () {
        // object in both strict & non-strict-mode
        console.log(this);
    }
}
jonas.calcAge();