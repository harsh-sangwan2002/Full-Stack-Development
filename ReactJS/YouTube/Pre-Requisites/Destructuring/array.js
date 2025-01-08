let arr = ["Hi", "I", "am", "Harsh"];

let [a, b, c, d, extra = "Hello"] = arr;
console.log(a, b, c, d, extra);