function createDummyPromise(delay, message) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    })
}

createDummyPromise(1000, "GYM").then((message) => {
    console.log(message);
    return createDummyPromise(2000, "BATH");
}).then((message) => {
    console.log(message);
    return createDummyPromise(3000, "BREAFAST");
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Error:", error);
});

// ES6 using async/await


console.log("A");

try {
    const r1 = await createDummyPromise(1000, "GYM");
    console.log(r1);

    const r2 = await createDummyPromise(2000, "BATH");
    console.log(r2);

    const r3 = await createDummyPromise(3000, "BREAKFAST");
    console.log(r3);
} catch (err) {
    console.log(err);
}

console.log("B");
