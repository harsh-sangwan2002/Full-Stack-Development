const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved Value!!');
    }, 20000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved Value!!');
    }, 40000)
})

// await is a keybword that can only be used inside an async function.
async function handlePromise() {

    console.log("Hello World");

    // Program will wait for at least 10 seconds.

    // JS Engine will wait for the promise to be resolved here.
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript2");
    console.log(val2);
}
handlePromise();

// function getData() {

//     // JS Engine will not wait for the promise to be resolved here.
//     p.then(res => {
//         console.log(res);
//     })
//     console.log("Namaste JavaScript");
// }
// getData();