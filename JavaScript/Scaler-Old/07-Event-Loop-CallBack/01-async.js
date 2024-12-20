/******************** Question-1 Synchronous Code : That code executes line by line *******************/
// console.log("Before");

// function fn(){
//     console.log("I am fn function.");
// }
// fn();
// console.log("After");

/******************** Question-2 Asynchronous Code : Some code is executed at current point of time and some at later point of time. *******************/
// console.log("Before");

// setTimeout(()=>{
//     console.log("I am fn function.");
// },2000);

// console.log("After");

/************************ Enviornment : Browser
    Web API :
     * console -> is not a part of js
     * window -> is not a part of js
     * document -> is not a part of js
     * fetch -> is not a part of js
     * eventListners -> is not a part of js
     *
 * Enviornment : Nodejs
     * fs -> is not a part of js
     * http -> nodejs
     * child_process -> nodejs
     * 
 * Thumb rules:
 *     -> Environment provide you the features.
 *     -> Js provide you the logic.
 *     -> Programmers:
 *                   [C++ -> Java] : Pointers were taken care of.
 *                   [Java -> JS]  : There are no threds to take care of.
 *    Inference : You cannot create an asynchronous fns as a programmer -> Enviornment
 * */

/********************* Question-3 *********************/
// console.log("Before");
// const cb2 = ()=>{
//     console.log("set timeout:");
//     let timeInFuture = Date.now() + 5000;

//     let before = Date.now();
//     console.log("Before while begins: ",before);
//     while(Date.now()<timeInFuture){

//     }

//     let after = Date.now();
//     console.log("After while loop: ",after);
//     console.log("Time spent: ",after-before);
// }

// const cb1 = ()=> console.log("Hello");
// setTimeout(cb1,1000);
// setTimeout(cb2,2000);

// console.log("After");

/********************* Question-4 *********************/
console.log("Before");
let flag = true;
const cb2 = () => {
    console.log("setTimeout 1");
    while (flag) {

    }
}
const cb1 = () => {
    flag = false;
    console.log("Hello");
}

setTimeout(cb2, 2000);
setTimeout(cb1, 1000);

console.log("After");