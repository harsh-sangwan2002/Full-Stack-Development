const obj = {
    value: 42,
    printValue: function () {

        function inner() {
            console.log(this);
        }

        // Global object
        setTimeout(inner, 1000);
    }
}

obj.printValue();