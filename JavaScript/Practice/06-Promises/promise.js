const result = new Promise((resolve, reject) => {

    const passing_marks = 70;
    let current_marks = 60;

    if (current_marks >= passing_marks)
        resolve("You have passed the exam");

    else
        reject("You have failed the exam");
})

result.then((data) => {
    console.log("then: ", data);
}).catch((err) => {
    console.log("catch: ", err);
});

const toss = new Promise((resolve, reject) => {
    const isHead = Math.random() > 0.5;
    if (heads) {
        resolve("It's heads");
    } else {
        reject("It's tails");
    }
});

toss.then((result) => {
    console.log("then: ", result);
}).catch((error) => {
    console.log("catch: ", error);
}); 