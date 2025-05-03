/********************* Question-1 ***********************/
// function outer() {
//     let arrFn = [];
//     var i = 0;
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();
// arrFn[0](); // 4
// arrFn[1](); // 5
// arrFn[2](); // 6

/********************* Question-2 ***********************/
// function outer() {
//     /**
//      * arrfns block scope refer to -> functions
//      * */
//     let arrFn = [];
//     var i = 0;
//     // let i = 0;
//     for (i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         });
//     }
//     return arrFn;
// }

// let arrFn = outer();
// arrFn[0](); // 4
// arrFn[1](); // 5
// arrFn[2](); // 6

/********************* Question-3 : fn is getting diffrent values of i because here
 * block scope is different for every iteration
 * **********************/
function outer() {
    /**
     * arrfns block scope refer to -> functions
     * */
    let arrFn = [];
    for (let i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            i++;
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0](); // 1
arrFn[1](); // 2
arrFn[2](); // 3 