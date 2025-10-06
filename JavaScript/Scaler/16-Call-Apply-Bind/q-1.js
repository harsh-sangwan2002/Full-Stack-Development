const obj = {
    value: 42,
    printValue: function () {

        function inner() {
            console.log(this.value);
        }
        // 42
        inner.call(this);

        // undefined
        inner();
    }
}

obj.printValue();