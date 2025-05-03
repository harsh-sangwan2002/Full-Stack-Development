const toss = new Promise((resolve, reject) => {
    resolve("Toss");
});

// ES5 using promise chaining
function doFlip() {

    console.log("A");

    toss.then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
    console.log("B");
}
doFlip();