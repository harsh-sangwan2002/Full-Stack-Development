function add(a, b) {
    console.log(a + b);
}

// checkHandler/checkQueue
setImmediate(() => {
    add(2, 3);
    console.log("This is setImmediate");
})

setInterval(() => {
    add(3, 10);
    console.log("This is setInterval");
}, 1000);

// timerQueue has higher priority-2
setTimeout(() => {
    add(3, 3);
    console.log("This is setTimeout");
}, 0)

// It runs before starting next iteration of event-loop
process.nextTick(() => {
    add(3, 7);
    console.log("This is process.nextTick");
})

console.log("Program has ended.");