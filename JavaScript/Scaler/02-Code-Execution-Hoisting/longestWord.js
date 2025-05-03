function findLongestWord(str) {
    // Write your code here
    // return the result
    let strArr = str.split(" ");
    let longestWord = strArr[0];

    strArr.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })

    return longestWord;
}