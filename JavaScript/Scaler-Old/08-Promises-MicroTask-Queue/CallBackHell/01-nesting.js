/**
 * callback hell -> intial defination.
 * 1. Nesting of call back -> When we have have to do serial tasks using async fns -> pyramid of doom.
 *                            (I want to read all the files serially)
 * 2. Inversion of control : We send our callback function to an async function and then that async function has the control to call it(trust issues).
 */

const fs = require('fs');
const files = ['f1.txt', 'f2.txt', 'f3.txt', 'f4.txt'];

// Serial Reading Of Files -> Callback Hell
// fs.readFile(files[0], cb1);
// function cb1(err, data) {

//     if (err)
//         console.log(err);

//     else {
//         console.log(data.toString());
//         fs.readFile(files[1], cb2);

//         function cb2(err, data) {
//             if (err)
//                 console.log(err);

//             else {
//                 console.log(data.toString());
//                 fs.readFile(files[2], cb3);

//                 function cb3(err, data) {
//                     if (err)
//                         console.log(err);

//                     else {
//                         console.log(data.toString());
//                         fs.readFile(files[3], cb4);

//                         function cb4(err, data) {

//                             if (err)
//                                 console.log(err)

//                             else
//                                 console.log(data.toString());
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// Approach:2
// fs.readFile(files[0], cb1);
// function cb1(err, data) {

//     if (err)
//         console.log(err);

//     else {
//         console.log(data.toString());
//         fs.readFile(files[1], cb2);
//     }
// }
// function cb2(err, data) {

//     if (err)
//         console.log(err);

//     else {
//         console.log(data.toString());
//         fs.readFile(files[2], cb3);
//     }
// }
// function cb3(err, data) {

//     if (err)
//         console.log(err);

//     else {
//         console.log(data.toString());
//         fs.readFile(files[3], cb4);
//     }
// }
// function cb4(err, data) {

//     if (err)
//         console.log(err);

//     else
//         console.log(data.toString());
// }

// Approach:3

function recursion(list) {

    if (list.length === 0)
        return;

    else {
        fs.readFile(list.shift(), cb);
        function cb(err, data) {

            if (err)
                console.log(err);

            else {
                console.log(data.toString());
                recursion(list);
            }
        }
    }
}
recursion(files);