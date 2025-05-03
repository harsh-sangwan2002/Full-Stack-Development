// ------------------------------ Question - 1 ------------------------------
function global() {
    var g = 'global';
    console.log(g)
    function outer() {
        var o = 'outer';
        console.log(g, o);
        function inner() {
            var i = 'inner';
            console.log(g, o, i);
        }
        inner();
    }
    outer();
}
global();

// ------------------------------ Question - 2 ------------------------------
function isHoliday(date) {
    var logData;
    var holidays;
    var result;
    holidays = ['01-01', '15-08', '02-10', '25-12'];
    result = '';

    if (holidays.includes(date)) {
        logData = 'Holiday';
        result = 'Yes';
    }

    result = 'No';
    console.log(logData, result, date);
    return result;
}
console.log(isHoliday('01-01'));