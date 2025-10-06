function flattenObj(obj, parentKey = '', res = {}) {

    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object') {
            flattenObj(obj[key], newKey, res);
        } else {
            res[newKey] = obj[key];
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

console.log(flattenObj(obj));