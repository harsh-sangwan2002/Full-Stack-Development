function sum(a, b) {
    var fn = function () {
        return a + b;
    }
    return fn;
}

console.log(typeof sum(1, 2));

var total = sum(1, 2);
console.log(total());

function compute(fn,x,y){
    return fn(x,y);
}

var agg = function(a,b){
    return a+b;
}
var sub = function(a,b){
    return a-b;
}
console.log(compute(agg,1,2));