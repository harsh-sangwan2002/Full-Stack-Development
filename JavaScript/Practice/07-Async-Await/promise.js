const toss = new Promise((resolve, reject) => {
    resolve("Toss");
});

// ES6 using async/await
async function doFlip2() {

    console.log("A");

    try {
        const data = await toss;
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    console.log("B");
}
doFlip2();