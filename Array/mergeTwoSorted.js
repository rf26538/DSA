// # Merge two sorted arrays into one sorted array without using built-in sort.

let arr = [3, 4, 2, 5, 1];
let arr1 = [9, 2, 7, 8, 6];

function mergeTwoSorted(arr, arr1) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        } 
    }

    for (let k = 0; k < arr1.length; k++) {
        for (let l = k+1; l < arr1.length; l++) {
            if(arr[k] > arr[l]) {
                [arr[k], arr[l]] = [arr[l], arr[k]];
            }
        } 
    }

    let merged = [...arr, ...arr1];
    for (let m = 0; m < merged.length; m++) {
        for (let n = m+1; n < merged.length; n++) {
            if(merged[m] > merged[n]){
                [merged[m], merged[n]] = [merged[n], merged[m]];
            }
        } 
    }

    return merged;
}

console.log(mergeTwoSorted(arr, arr1))