function delayedSum(a, b, callback) {
    // write solution here ============
    setTimeout(() => {
        callback(a + b);
    }, 1000)
}