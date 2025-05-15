// 5 falsy values - '', 0, NaN, undefined, null

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

// truthy values
console.log(Boolean([]));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it at all!");
} else {
    console.log('You should get a job.');
}

let height = 0;
if (height) {
    console.log('Yay! height is defined');
} else {
    console.log('No! height is undefined');
}