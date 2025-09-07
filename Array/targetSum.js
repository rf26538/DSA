// # Find all pairs in array whose sum = target.
// [2,7,11,15], target=9 → [2,7]

function targetSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(targetSum([2,7,11,15], 26));