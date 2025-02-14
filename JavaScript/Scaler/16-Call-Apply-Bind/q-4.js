const obj = {
    value: 42,
    printValue: function () {

        function inner() {
            console.log(this);
        }

        const bindedInner = inner.bind(this);
        // obj
        setTimeout(bindedInner, 1000);
    }
}

obj.printValue();