function sum(a) {

    if (!a)
        return 0;

    return function (b) {

        if (!b)
            return a;

        return sum(a + b);
    }
}

console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3)());
console.log(sum(1)(2)(3)(4)());
console.log(sum(1)(2)(3)(4)(5)());