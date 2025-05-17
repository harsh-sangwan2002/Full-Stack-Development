function x() {
    // setTimeout is a function that takes a callback function and a delay in milliseconds
    var i;
    for (i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JS.");
}

function x() {
    // setTimeout is a function that takes a callback function and a delay in milliseconds
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JS.");
}

function x() {
    // setTimeout is a function that takes a callback function and a delay in milliseconds
    for (let i = 1; i <= 5; i++) {
        function fn(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        };
        fn(i);
    }
    console.log("Namaste JS.");
}

x();