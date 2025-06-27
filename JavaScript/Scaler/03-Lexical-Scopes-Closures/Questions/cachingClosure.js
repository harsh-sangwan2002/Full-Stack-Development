function cachingFunction(complexCalculation) {
    // Modify this cache object and store data in the arg
    // also perform the complexCalculation on the arg
    let cache = {};
    // Implement the closure-based caching mechanism here
    return function (arg) {
        arg = String(arg);
        if (cache[arg]) {
            return cache[arg];
        } else {
            const val = complexCalculation(arg);
            cache[arg] = val;
            return val;
        }
    };
}
