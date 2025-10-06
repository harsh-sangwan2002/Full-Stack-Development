const fs = require('fs').promises;

/************************ Statement:1 *************************/

// const p1 = fs.readFile('f1.txt');
// const p2 = fs.readFile('f2.txt');

// const combinedPr = Promise.all([p1,p2]);
// const combinedPr2 = Promise.any([p1,p2]);

// combinedPr.then(arr=>{
//     console.log(arr.toString());
// }).catch(err=>{
//     console.log(err);
// })

// combinedPr2.then(val=>{
//     console.log(val.toString());
// }).catch(err=>{
//     console.log(err);
// })

/************************ Statement:2 *************************/
const p1 = Promise.resolve(100);
const p2 = Promise.reject(200);
const p3 = Promise.resolve(300);
const p4 = Promise.reject(400);

const promsieAll = async () => {

    console.log("1: ");

    // Resolves the promise if all promise gets resolved
    // Rejects the promise if any promise gets rejected
    const group1 = await Promise.all([p1, p2]);
    console.log("2: ", group1);

    // Resolves the promise if any promise gets resolved
    // AggregateError the promise if all promise gets rejected
    const group2 = await Promise.any([p3, p4]);

    console.log("3: ", group2);

    return [group1, group2];
}

promsieAll().then(val=>{
    console.log(val);
}).catch(err=>{
    console.log(err);
});