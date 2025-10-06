// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression -> hoisted differently than normal function declaration
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {

    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

const yearsLeft = yearsUntilRetirement(1990);
console.log(yearsLeft);