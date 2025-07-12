function toggleCharacters(str) {

    let res = "";

    for (let i = 0; i < str.length; i++) {

        let ch = str[i];

        if (ch >= 'a' && ch <= 'z')
            res += String.fromCharCode(ch.charCodeAt(0) - 32);
        else if (ch >= 'A' && ch <= 'Z')
            res += String.fromCharCode(ch.charCodeAt(0) + 32);
        else
            res += ch;
    }

    return res;
}

// Example usage:
console.log(toggleCharacters("Hello World!")); // Outputs: "hELLO wORLD!"