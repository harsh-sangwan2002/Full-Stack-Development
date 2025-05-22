// Question - 1
function twoFer(name : string = "you"):string{
    return `One for ${name}, one for me.`;
}
console.log(twoFer());
console.log(twoFer("Alice"));

// Question - 2
function isLeapYear(year: number): boolean {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}
console.log(isLeapYear(2000));
console.log(isLeapYear(1900)); 