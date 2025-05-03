function sum() {

    let cache = {};

    return function (args) {
        if (cache[args])
            return cache[args];

        cache[args] = args[0] + args[1];
        return cache[args];
    }
}

const memoizedSum = sum();

console.log(memoizedSum([1, 2])) // computes the sum of [1,2] and stores it in the cache
console.log(memoizedSum([1, 2])) // returns the sum of [1,2] from the cache