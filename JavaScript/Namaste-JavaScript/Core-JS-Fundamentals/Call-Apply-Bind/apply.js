let obj = {
    firstName: "Harsh",
    lastName: "Sangwan",
    firstName(hometown, state) {
        console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
    }
}

let obj2 = {
    firstName: "Peter",
    lastName: "Parker"
}

obj.firstName.apply(obj2, ["New York", "USA"]);