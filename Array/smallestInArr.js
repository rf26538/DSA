// # Find the k-th smallest element in an array.
let arr = [44, 43, 11, 33, 299];
let k =2;
function smallestKInArr(arr, k) {
    for (let i = 0; i < arr.length; i++) { 
       for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
               [arr[i], arr[j]] = [arr[j], arr[i]];
            }
       }
    }
    return arr[k-1];
    // return arr;
}

console.log(smallestKInArr([-1, -2, -3, -4, -5, -2 ,5 ,4, 3, 1, 2], 2)); //[-5, -4, -3, -2, -2, -1,  1,  2,  3,  4, 5 ] ->
console.log(smallestKInArr([-1, -2, -3, -4, -5, -2], 2)); //[ -5, -4, -3, -2, -2, -1 ]
console.log(smallestKInArr(arr, k)) //[11, 33, 43, 44, 299]