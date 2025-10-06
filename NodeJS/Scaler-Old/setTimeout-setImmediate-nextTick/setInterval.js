let count = 0;

let timerId = setInterval(() => {

    if (count == 5)
        clearInterval(timerId);

    console.log("This is setInterval. Count value is: ", count);
    count++;
}, 1000);