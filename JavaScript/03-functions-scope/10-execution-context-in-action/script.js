/************** Execution Context Phases
 * 1. Memory Creation Phase -
 *    a) Creates the global object (window-browser, global-node.js).
 *    b) Creates 'this' object & binds with the global object. 
 *    c) Set up memory heap for string variables & function references.
 *    d) Store functions & variables in global execution context and set to "undefined".
 * 
 * 2. Execution Phase -
 *    a) Execute code line by line
 *    b) Creates a new execution context for each function call.
 * ****************/

const x = 100;
const y = 50;

function getSum(n1,n2){
    const sum = n1+n2;
    return sum;
}

const sum1 = getSum(x,y);
const sum2 = getSum(10,5);

console.log(sum1,sum2);