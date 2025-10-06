// this in global space
console.log(this); // globalObject - window, global

// this inside a function
function x() {

    // value depends on the strict mode and non-strict mode
    console.log(this); // window / undefined
}
x();

/***************  this substitution ->
If the value of "this" is undefined or null then 
"this" will be replaced with the global object only in non-strict mode. 
****************/

// this keyword also depends on the way the function is called

// this inside an object's method
const obj = {
    name: "John",
    age: 23,
    x: function () {
        console.log(this); // obj
        
        function y(){
            console.log(this);
        }
        y(); // window / undefined
    },
    arrowFn:()=>{
        console.log(this); // globalObject - window, global

        const z = ()=>{
            console.log(this); // globalObject - window, global
        }
        z();
    }
}

obj.x();
obj.arrowFn();

// this inside DOM refers to the HTML element.