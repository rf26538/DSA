// # Find the k-th largest element in an array.
let arr = [334, 233, 332, 222, 123];
let k = 2;

function kthlargest(arr, k) {
    for(let i=0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++) {
           if (arr[i] > arr[j]) {
                [arr[i] , arr[j]] = [arr[j] , arr[i]];
           }
        }
    }
    return arr[arr.length - k];
}

console.log(kthlargest(arr, k));