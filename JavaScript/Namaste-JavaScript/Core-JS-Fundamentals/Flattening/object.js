function flattenObj(obj, parentKey = '') {
    let res = {};

    for (let key in obj) {
        let newKey = parentKey ? parentKey + '.' + key : key;

        if (typeof obj[key] === 'object') {
            const flattenedChild = flattenObj(obj[key], newKey);
            for (let childKey in flattenedChild) {
                res[childKey] = flattenedChild[childKey];
            }
        } else {
            res[newKey] = obj[key];
        }
    }

    return res;
}


let obj = {
    name: "Akshay",
    address: {
        personal: {
            city: "Dehradun",
            area: "Majra",
        },
        office: {
            city: "Hyderabad",
            area: {
                landmark: "Hitesh Shop",
            }
        }
    }
}

const res = flattenObj(obj);
console.log(res);