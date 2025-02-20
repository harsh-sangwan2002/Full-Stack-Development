var obj = {
    x: 1,
    y: 2,
    z: {
        l: 10,
        m: 20
    }
}

var obj2 = JSON.parse(JSON.stringify(obj))

obj2.x = 100;
obj2.z.l = 100;

console.log(obj);

// Own deep clone
function deepClone(obj) {

    let res = {}

    for (let key in obj) {

        if (typeof obj[key] !== "object")
            res[key] = obj[key];

        else
            res[key] = deepClone(obj[key])
    }

    return res;
}

var obj3 = deepClone(obj);

obj3.x = 100;
obj3.z.l = 100;

console.log(obj);