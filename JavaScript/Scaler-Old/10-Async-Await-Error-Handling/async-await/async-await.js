const fs = require('fs');
const promise = fs.promises.readFile('f1.txt');

// async function fn() {
//     try {
//         const data = await promise;
//         console.log("Data inside the file is: ", data.toString());
//     } catch (err) {
//         console.log(err);
//     }
// }
// fn();

async function fn() {
    try {
        const data1 = await fs.promises.readFile('f1.txt');
        console.log(data1);

        const data2 = await fs.promises.readFile('f1.txt');
        console.log(data2);

        const data3 = await fs.promises.readFile('f4.txt');
        console.log(data3);

        return "rVal from fn";
    } catch (err) {
        // For failure/alert this is the correct place.
        // Unsubscribe from an event after failure
        console.log(err);
    }finally{
        // Close DB connection.
        // This is the correct place to write such kind of logic
        console.log("It will run in any scenario.");
    }
}

const pr = fn();
pr.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})