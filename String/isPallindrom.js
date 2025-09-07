// # Check if a string is a palindrome (case-insensitive).

function ispallindrom(str) {
    let revStr = "";
    for (let i = str.length-1; i >= 0 ; i--) {
        revStr += str[i];
    }

    if(str === revStr) {
        return "Pallindrom";
    } else {
        return "Not a Pallindrom";
    }

}
console.log(ispallindrom("malayalam"));
console.log(ispallindrom("abba"));
console.log(ispallindrom("rahul"));