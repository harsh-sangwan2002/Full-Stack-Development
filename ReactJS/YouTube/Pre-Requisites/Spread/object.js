let obj = {
    name: "Harsh",
    address: {
        country: "India",
        state: {
            code: "DL",
            pin: 1234
        }
    }
}

let obj2 = obj;
let obj3 = { ...obj, address: { ...obj.address, state: { ...obj.address.country.state } } };
let obj4 = JSON.parse(JSON.stringify(obj));

obj2.name = "Harsh2";
obj3.address.state.code = "UP";
obj4.address.state.code = "MP";


console.log(obj);
console.log(obj2);
console.log(obj3);