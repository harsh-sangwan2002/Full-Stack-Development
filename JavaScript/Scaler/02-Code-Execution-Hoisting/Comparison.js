let val = null && undefined && 0;
console.log(val);

val = "Damn" && false;
console.log(val);

val = "Hello" && "World";
console.log(val);

val = undefined || 0 || "Hello";
console.log(val);

val = null || undefined || 0;
console.log(val);

val = "Damn" || false;
console.log(val);