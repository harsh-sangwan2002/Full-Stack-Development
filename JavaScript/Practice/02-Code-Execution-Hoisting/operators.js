console.log(true && true); // true
console.log(true && false); // false
console.log(0 && false); // 0
console.log("Damn" && false); // false 
console.log(false && "Damn" && false); // false
console.log(false && "Damn") // false
console.log(undefined && false && "Damn"); // undefined
console.log("Damn" && "Oh Shit!!"); // Oh Shit!!

console.log(1 || "2" || 0 || undefined); // 1
console.log(undefined || 1 || "2" || 0); // 1
console.log(undefined || 0 || 1 || "2"); // 1
console.log(undefined || 1 || "2" || 0); // 1
console.log("undefined" || 1 || "2" || 0); // undefined

console.log(0 == 0)
console.log(0 == null)
console.log(0 == "")
console.log(null == undefined)