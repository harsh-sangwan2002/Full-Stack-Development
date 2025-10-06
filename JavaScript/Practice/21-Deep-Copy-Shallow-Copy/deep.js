const obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
}

const obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2);

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }

    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const obj3 = deepCopy(obj1);
console.log(obj3);