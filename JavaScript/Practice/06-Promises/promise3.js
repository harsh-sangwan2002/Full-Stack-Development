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