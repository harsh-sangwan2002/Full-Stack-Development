console.log(process.cwd());
console.log(process.arch);
console.log(process.version);
console.log(process.platform);

process.stdout.write("Hi Node.js\n");

console.log = (val) => {
    process.stdout.write(val + " process \n");
}

console.log("Hello");