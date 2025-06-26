function main(str) {
    // Write your code here
    // return the count
    let vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {

        let ch = str[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            vowelsCount++;

        else if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
            vowelsCount++;
    }

    return vowelsCount;
}