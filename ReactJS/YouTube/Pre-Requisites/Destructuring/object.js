let obj = {
    name: "Harsh",
    address: {
        country: "India",
        state: {
            code: "DL",
            pin: 110045
        }
    }
}

let { address, address: { state } } = obj;
console.log(address, state); // India undefined