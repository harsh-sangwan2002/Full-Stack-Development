function fn() {

    return fn;
}

console.log(fn() == new fn())