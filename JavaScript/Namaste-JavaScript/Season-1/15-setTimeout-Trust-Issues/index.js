console.log("Start");

setTimeout(() => {
    console.log("setTimeout called");
}, 5000)

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While expires");
