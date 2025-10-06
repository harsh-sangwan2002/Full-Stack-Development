function createDummyPromise(delay, message) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    })
}

// I will go to the GYM (2000ms)
// I will take bath after that (1000ms)
// I will have breakfast after that (3000ms)

createDummyPromise(2000, "GYM").then(data => {
    console.log(data);
    return createDummyPromise(1000, "Bath");
}).then(data => {
    console.log(data);
    return createDummyPromise(3000, "Breakfast");
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})