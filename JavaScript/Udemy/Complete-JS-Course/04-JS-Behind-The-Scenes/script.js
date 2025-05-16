'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1991 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, you are a millenial ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        console.log(millenial);
        console.log(add(2, 3));
    }

    printAge();
    return age;
}

const firstName = "Jonas";
calcAge(1991);