const obj = {
    value: 42,
    printValue: function () {

        function inner() {
            console.log(this);
        }
        // obj
        inner.call(this);

        // Global object
        inner();
    }
}

obj.printValue();