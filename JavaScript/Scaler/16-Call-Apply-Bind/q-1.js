var obj = {
    value: 42,
    printValue: function () {

        function inner() {
            console.log(this.value);
        }
        inner.call(this);
        inner();
    }
}

obj.printValue();