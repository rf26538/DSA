// # Rotate an array k times left.
let arr = [1, 2, 3, 4, 5];
k = 2;

// Left rotation: [3, 4, 5, 1, 2]
function rotateLeftByk(k , arr) {
    for (let i = 0; i < k; i++) {
        let copy = arr[0];
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j+1]; 
        }
        arr[arr.length -1] = copy
    }
    return arr;
}

console.log(rotateLeftByk(k , arr));