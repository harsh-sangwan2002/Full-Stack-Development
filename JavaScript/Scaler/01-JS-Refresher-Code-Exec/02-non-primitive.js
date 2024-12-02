// 1st Statement-> Function definition
function fn(param1){
    console.log("hello world!",param1);
    return // JS will add semi-colon here
    "my name is khan.";
}

const rVal = fn();
console.log("Value of rVal: ",rVal);
console.log("typeof fn: ",typeof fn);

// 2nd Statement-> Object
let cap = {
    name:"Steve",
    lastName:"Rogers",
    isAvenger:true,
    address:{
        city:"Manhatten",
        state:"New York",
    },
    sahyHi:function(){
        console.log("Cap say's hi!");
    },
    movies:["Avenger","Civil War"],
    2:"Something random",
    // key:"Surprise",
}
console.log(cap);
console.log("One way to print Steve: "+cap.name+"Another way to print Steve: "+cap['name']);

// Object[x] -> search for value inside the variable.
// Object.x -> search for a key named x.
for(let key in cap){
    console.log("My key is: "+key+" ,value against it using cap[key]: "+cap[key]+" and using cap.key: "+cap.key);
}