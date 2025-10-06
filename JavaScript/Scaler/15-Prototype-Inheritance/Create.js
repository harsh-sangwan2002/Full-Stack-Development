var obj = Object.create({ a: 1 });
console.log(obj.__proto__);
console.log(obj.a); // 1

for (let key in obj) {
    console.log(obj[key]); // a
    console.log(obj.hasOwnProperty(key)); // false
}