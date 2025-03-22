function* fn(){
    console.log("Before first yield");
    console.log("Before first yield");
    console.log("Before first yield");

    yield 10;
    console.log("Before second yield");

    yield 20;
    console.log("Before second yield");
}

let geneartor = fn();
console.log(geneartor.next().value);
console.log(geneartor.next().value);
console.log(geneartor.next().value);