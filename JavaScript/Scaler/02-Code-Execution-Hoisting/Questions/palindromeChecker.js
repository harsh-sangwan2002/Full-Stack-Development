function isPalindrome(str) {
    // Write your code here
    // return the result
    const string = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}