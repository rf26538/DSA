// Sort an array.
let arr = [3, 4, 1, 5, 2];

function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
           if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
           }
       }
    }

    return arr;
}

console.log(sortArr(arr))