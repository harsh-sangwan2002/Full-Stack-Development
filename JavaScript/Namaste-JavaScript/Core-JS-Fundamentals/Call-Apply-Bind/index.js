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

// Function borrowing - call
obj.firstName.call(obj2, "New York", "USA");

// apply
obj.firstName.apply(obj2, ["New York", "USA"]);

// bind
const fn = obj.firstName.bind(obj2, "New York");
fn("USA");