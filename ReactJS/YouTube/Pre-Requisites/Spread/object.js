let obj = {
    name: "Harsh",
    address: {
        country: "India",
        state: {
            city: "DL",
            pin: 122001
        }
    }
}

let obj2 = obj;
obj2.name = "abcd";

let obj3 = { ...obj, addres: { ...obj.address } };
obj3.address.country = "USA";

let obj4 = JSON.parse(JSON.stringify(obj));
obj4.address.state.city = "Mumbai";

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);