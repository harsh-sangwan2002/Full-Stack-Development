// module.exports = function sum(first, second) {
//     return first + second;
// }

// function add(first, second) {
//     return first + second;
// }

// function sub(first, second) {
//     return first - second;
// }

// function mul(first, second) {
//     return first * second;
// }

// module.exports = {
//     add,
//     sub,
//     mul
// }

exports = {
    add: (first, second) => {
        return first + second;
    },
    sub: (first, second) => {
        return first - second;
    },
    mul: (first, second) => {
        return first * second;
    }
}

module.exports = exports;