// Loop through arrays
const items = ['books', 'table', 'chair', 'kite'];
const users = [
    { name: "Brad" },
    { name: "Kate" },
    { name: "Steve" },
]

for (const item of items) {
    console.log(item);
}
for(const user of users){
    console.log(user);
}

// Loop over strings
const str = 'Hello World!';

for(let letter of str){
    console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name','John');
map.set('age','30');

for(const [key,val] of map){
    console.log(key,":",val);
}