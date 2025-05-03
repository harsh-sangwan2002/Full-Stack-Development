let p = new Promise(function (resolve, reject) {
    setTimeout(function () {   // this line is going tobe ignored after 2s
        reject(new Error("some value v1"));
    }, 2000);

    reject("some value v1");

    setTimeout(function () { // this line is going tobe ignored after 2s
        reject(new Error("some value v2"));
    }, 2000);

    resolve("some value v2");

    setTimeout(function () {  // this line is going tobe ignored after 2s
        reject(new Error("some value v3"));
    }, 2000);
});

/** Statment 1 */
// p.then(null, function (err) {   // because of 2nd argument then is suppose to catch only exception. 
//     console.log(18);
//     console.log(err);
// }).catch(function (err) {
//     console.log(23);
//     console.log(err);
// }).finally(function () {
//     console.log(28);
// });  


/***************** Statment 2 ***************/
// p.then(function (val) {
//     console.log("34: ", val);
// },function(err){
//     console.log(err);
// });  

/**
 * finally does not take any argumenst -> forwards the argument recieved
 * finally will not return any thing except error. If you try to return something that is not error it will going to get ignored.
 * */

// const fs = require("fs");

// p.finally(function () {
//     console.log("finally: ", 2);
//     throw new Error("Hello");
//     // return Promise.resolve("some Error");
// }).finally(function () {
//     console.log("finally: ", 3);
//     return fs.promises.readFile("f1.txt");
// }).then(function (val) {
//     console.log("then with finally:", val);
// }).catch(function (err) {
//     console.log("catch with finally: ", err);
// })

Promise.resolve(1)
    .then(() => 2)
    .then((data) => {
        console.log("67: ", data);
        return 3
    }).then((value) => {
        console.log(value);
        return value * 3;
    }).then(console.log)   //~ .then((data) => console.log(data))