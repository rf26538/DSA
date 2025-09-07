function swapCase(str) {
    let result = "";
  
    for (let ch of str) {
      if (ch >= 'A' && ch <= 'Z') {
        result += ch.toLowerCase();
      } else if (ch >= 'a' && ch <= 'z') {
        result += ch.toUpperCase();
      } else {
        result += ch;
      }
    }
  
    return result;
  }
  
  console.log(swapCase("Hello World!")); // hELLO wORLD!
  console.log(swapCase("JavaScript123")); // jAVAsCRIPT123
  