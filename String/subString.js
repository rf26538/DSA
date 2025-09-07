// # Longest substring without repeating characters.
// "abcabcbb" → "abc"

function longestUniqueSubstring(str) {
    let longest = "";
  
    for (let i = 0; i < str.length; i++) {
      let current = "";
  
      for (let j = i; j < str.length; j++) {
        if (current.includes(str[j])) break;
        current += str[j];
      }
  
      if (current.length > longest.length) {
        longest = current;
      }
    }
  
    return longest;
  }
  
  console.log(longestUniqueSubstring("abcabcbb")); // "abc"
  console.log(longestUniqueSubstring("bbbbb"));    // "b"
  console.log(longestUniqueSubstring("pwwkew"));   // "wke"
  