var obj = {
    x: 1,
    y: 2,
    z: {
        l: 10,
        m: 20
    }
}

var obj2 = obj;
var obj3 = Object.assign({}, obj)
var obj4 = { ...obj }

obj4.x = 20;
obj4.z.l = 100;

console.log(obj2);
console.log(obj3);
console.log(obj4);