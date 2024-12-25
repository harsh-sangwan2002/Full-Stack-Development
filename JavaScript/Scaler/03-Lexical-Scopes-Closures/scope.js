/*************************** Question-1 *****************************/
// function gloabl() {
//     var g = 'global'
//     console.log(g, o, i); // ReferenceError - o is not defined
//     function outer() {
//         var o = 'outer';
//         console.log(g, o, i);
//         function inner() {
//             var i = 'inner';
//             console.log(g, o, i);
//         }
//         inner();
//     }
//     outer();
// }
// gloabl();

/*************************** Question-2 ******************************/
// function gloabl() {
//     var g = 'global'
//     console.log(g); // gloabl
//     function outer() {
//         var o = 'outer';
//         console.log(g, o); // gloabl outer
//         function inner() {
//             var i = 'inner';
//             console.log(g, o, i); // global outer inner
//         }
//         inner();
//     }
//     outer();
// }
// gloabl();

/*************************** Question-3 ******************************/
// function isHoliday(date) {
//     var holidays = ['25/12/24'];
//     var result = '';

//     if (holidays.includes(date)) {
//         var logData = 'Yes, its a holiday';
//         result = 'Yes'
//     }

//     else {
//         result = 'No';
//     }

//     console.log(holidays, result, logData);
//     return result;
// }
// console.log(isHoliday('25/12/24'))

/*************************** Question-4 ******************************/
// function isHoliday(date) {
//     let holidays = ['25/12/24'];
//     let result = '';

//     if (holidays.includes(date)) {
//         let logData = 'Yes, its a holiday';
//         result = 'Yes'
//     }

//     else {
//         result = 'No';
//     }

//     console.log(holidays, result, logData); // ReferenceError
//     return result;
// }
// console.log(isHoliday('25/12/24'))

/*************************** Question-5 ******************************/
// function isHoliday(date) {

//     console.log(holidays, result, logData); // ReferenceError - Cannot access holidays before initilization

//     let holidays = ['25/12/24'];
//     let result = '';

//     if (holidays.includes(date)) {
//         let logData = 'Yes, its a holiday';
//         result = 'Yes'
//     }

//     else {
//         result = 'No';
//     }

//     return result;
// }
// console.log(isHoliday('25/12/24'))

/*************************** Question-6 ******************************/
function isHoliday(date) {

    console.log(logData); // ReferenceError - logData is not defined

    let holidays = ['25/12/24'];
    let result = '';

    if (holidays.includes(date)) {
        let logData = 'Yes, its a holiday';
        result = 'Yes'
    }

    else {
        result = 'No';
    }

    return result;
}
console.log(isHoliday('25/12/24'))