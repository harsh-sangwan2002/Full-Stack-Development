function flattenObj(obj, parentKey = '', res = {}) {

    for (let key in obj) {
        let propName = `${parentKey}${key}`;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObj(obj[key], `${propName}.`, res);
        } else {
            res[propName] = obj[key];
        }
    }

    return res;
}

const obj = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    }
};
console.log(flattenObj(obj)); // { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3 }