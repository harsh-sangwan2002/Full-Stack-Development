const shared = {};

function fn() {
    return shared;
}

console.log(fn() === new fn());