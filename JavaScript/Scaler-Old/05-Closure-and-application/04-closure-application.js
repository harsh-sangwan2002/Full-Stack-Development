// Function Currying
/********************* Question-1 ***********************/
function counter(a) {
    let count = 1;

    if (a === 0)
        return count;

    return function inner(b) {
        count++;
        if (b === 0)
            return count;

        else
            return inner;
    }
}

console.log(counter(0)); // 1
console.log(counter()(0)); // 2
console.log(counter()()(0)); // 3
console.log(counter()()()(0)); // 4

/********************* Question-2 ***********************/
function sum(a) {

    if (!a)
        return 0;

    return function inner(b) {

        if (!b)
            return a;

        else {
            a += b;
            return inner;
        }
    }
}

console.log(sum()); // 0
console.log(sum(1)()); // 1
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); // 6

/********************* Question-3 ***********************/
function createEvenStack() {
    return {
        items: [],
        push(item) {
            if (item % 2 == 0) {
                console.log("Its pushed.");
                this.items.push(item);
            }
            else {
                console.log("Please input even value.");
            }
        },
        pop() {
            return this.items.pop();
        }
    }
}

function createEvenStack() {
    let items = [];

    return {
        push(item) {
            if (item % 2 == 0) {
                console.log("Its pushed.");
                items.push(item);
            }
            else {
                console.log("Please input even value.");
            }
        },
        pop() {
            return items.pop();
        }
    }
}

const stack = new createEvenStack();
stack.push(1);
stack.push(2);
console.log("Stack is: ", stack.items);

stack.push(3);
stack.push(4);
console.log("Stack is: ", stack.items);

// prevent this behaviour
// stack.items = [100,200,300];

/**
 * Memoization : Some calculations take a lot of time  with
 * memoization we can store result of costly calculations -> useMemo
 * */
function calc(n) {
    let sum = 0;

    for (let i = 0; i < n; i++)
        sum += i;

    return sum;
}

console.time();
let res = calc(1000000000);
console.log(res);
console.timeEnd();

function memoize(cb) {

    let cache = {};
    return function (val) {

        if (cache[val] !== undefined)
            return cache[val];

        const res = cb(val);
        cache[val] = res;
        return res;
    }
}

let efficientCalcFn = memoize(calc);
console.time();
let res2 = efficientCalcFn(1000000000);
console.log("res", res2);
console.timeEnd();

console.time();
let res3 = efficientCalcFn(1000000000);
console.log("res", res3);
console.timeEnd();