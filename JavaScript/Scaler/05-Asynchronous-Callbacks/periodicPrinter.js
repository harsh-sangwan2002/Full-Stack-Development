function periodicPrinter(callback, timeInterval) {
    // write solution here ============
    let id = setInterval(() => {
        callback("This is callback");
    }, timeInterval)

    return id;
}