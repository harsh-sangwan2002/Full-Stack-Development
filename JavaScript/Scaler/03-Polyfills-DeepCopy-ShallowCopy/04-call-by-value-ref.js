function modifier(a,b){
    console.log("2",a,b);
    a[0] = 10; b[1] = 20;
    console.log("4",a,b);
}

let p = [4,7,9];
let q = [3,6,8];
modifier(p,q);

console.log("11",p,q);