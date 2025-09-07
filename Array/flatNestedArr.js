// Flatten a deeply nested array without using .flat().
let arr = [1, [2, [3, [4]]]];
// Expected: [1, 2, 3, 4]

function flatNestedArr(arr) {
  let flatArr = [];

  for (let i = 0; i < arr.length; i++) {

    if(Array.isArray(arr[i])) {
      flatArr = flatArr.concat(flatNestedArr(arr[i]));
    } else {
      flatArr.push(arr[i])
    }
    
  }

  return flatArr;
}

console.log(flatNestedArr(arr))