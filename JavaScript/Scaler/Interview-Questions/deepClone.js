let obj = {
    name: "Harsh",
    age: 22,
    address: {
        country: "India",
        state: {
            code: 1234,
            name: "Haryana"
        }
    }
}

function deepClone(obj) {

    let res = {};

    for (let key in obj) {

        if (typeof obj[key] !== 'object')
            res[key] = obj[key];

        else
            res[key] = deepClone(obj[key]);
    }

    return res;
}

let obj2 = deepClone(obj);
obj2.address.country = "USA";
console.log(obj);