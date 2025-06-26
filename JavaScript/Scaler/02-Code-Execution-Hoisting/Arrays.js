const names = ["Namrata", "Sharansh", "Siddharth", "Shivam"];

let lastName = names.pop();
console.log(lastName);
console.log(names);

let firstName = names.shift();
console.log(firstName);
console.log(names);

names.push("Aarav");
console.log(names);

names.unshift("Aarav");
console.log(names);