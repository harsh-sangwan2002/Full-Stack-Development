// 1. Variables 
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// 2. Functions
console.log(addDec(1, 2));
// console.log(addExp(1, 2));
// console.log(addArrow(1, 2));

function addDec(a, b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;