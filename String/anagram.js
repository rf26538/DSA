// # Check if two strings are anagrams.
// "listen", "silent" → true

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    let count = {};
  
    for (let ch of str1) {
      count[ch] = (count[ch] || 0) + 1;
    }
  
    for (let ch of str2) {
      if (!count[ch]) return false;
      count[ch]--;
    }
  
    return count;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("race", "care"));     // true
console.log(areAnagrams("abc", "def"));       // false
  