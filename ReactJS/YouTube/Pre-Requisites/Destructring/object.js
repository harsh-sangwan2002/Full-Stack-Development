let obj = {
    name: "Harsh",
    address: {
        country: "India",
        state: {
            city: "Delhi",
            area: "Rohini",
            pin: 1234
        }
    }
}

let { name, address, address: { country } } = obj;
console.log(name);
console.log(address);
console.log(country);