const obj = {
    value: 42,
    printValue: function () {

        return function () {
            console.log(this.value);
        }
    }
}

const fn = obj.printValue();
// 42
fn.call(obj);