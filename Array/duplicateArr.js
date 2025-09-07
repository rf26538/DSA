// Find duplicates in an array without using extra space.
let arr = [1, 2, 3, 2, 4, 5, 1];
// Expected: [1, 2]

function duplicateArr(arr) {
  let dupArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        dupArr.push(arr[i])
      }
    }
  }
  return dupArr;
}

console.log(duplicateArr(arr));