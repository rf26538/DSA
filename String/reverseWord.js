// # Reverse words in a sentence (not characters).
// "India is my country" → "country my is India"

function reversWord(str) {
    let revWord = "";
    let revStrArr = str.split(" ");
    for (let i = revStrArr.length-1; i >= 0; i--) {
        revWord += revStrArr[i] + " ";
    }

    return revWord;
}
console.log(reversWord("India is my country"));