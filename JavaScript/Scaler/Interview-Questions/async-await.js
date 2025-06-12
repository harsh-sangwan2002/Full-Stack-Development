const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 4000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000)
})

async function asyncFn() {
    console.log("Before");

    const val1 = await p1;
    console.log("p1 resolved", val1);

    const val2 = await p2;
    console.log("p2 resolved", val2);

    console.log("After");
}

function thenCatchFn() {

    console.log("Before");

    p1.then(val => {
        console.log("p1 resolved", val);
    })

    p2.then(val => {
        console.log("p2 resolved", val);
    })

    console.log("After");
}

asyncFn()
thenCatchFn();