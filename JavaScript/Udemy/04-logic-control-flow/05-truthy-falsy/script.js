/***************** Falsy Values :
 * 1) false
 * 2) 0
 * 3) "" or '' (Empty string)
 * 4) null
 * 5) undefined
 * 6) NaN ******************/

/***************** Everything else is truthy :
 * 1) true
 * 2) '0'
 * 3) " " or ' ' (Space)
 * 4) 'false'
 * 5) []
 * 6) {}
 * 7) function(){} ******************/

const x = function(){

}

if (x) {
    console.log('This is truthy.');
} else {
    console.log('This is falsy.');
}

console.log(Boolean(x));

// Truthy & falsy caveats
const children = 0;

if(!isNaN(children)){
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of children')
}

// Checking for empty array
const posts = [];

if(posts.length>0){
    console.log('List posts');
}else{
    console.log('No posts');
}

// Checking for empty objects
const user = {
    name:'Steve',
    id:1
}

// Converts object entries into an array
// console.log(Object.entries(user));

if(Object.keys(user).length>0){
    console.log('List user');
}else{
    console.log('No user');
}

// Loose Equality (==)
console.log(false==0);
console.log(''==0);
console.log(null==undefined);