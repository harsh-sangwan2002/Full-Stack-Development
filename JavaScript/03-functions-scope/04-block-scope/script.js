const x = 100;

if(true){
    const y = 200;
    console.log(x+y);
}

// ReferenceError: y is not defined
// console.log(x+y);

for(var i=0; i<=10; i++)
    console.log(i);

// i is block-scoped
// console.log(i);

if(true){

    // const & let are block-scoped
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log(a);
// console.log(b);
console.log(c);

function run(){
    var d = 100;
    console.log(d);
}

run();
//ReferenceError
console.log(d);