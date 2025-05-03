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

    if (typeof obj !== 'object' || obj == null)
        return obj;

    else if (Array.isArray(obj))
        return obj.map(item => deepClone(item))

    else if (obj instanceof Function)
        return obj.bind({})

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