// # Rotate an array k times right.
let arr = [1, 2, 3, 4, 5];
k = 2;

// Right rotation: [4, 5, 1, 2, 3]
function rotateRightByk(k , arr) {
    for (let i = 0; i < k; i++) {
        let copy = arr[arr.length -1];
        for (let j = arr.length-1; j >= 0; j--) {
            arr[j] = arr[j-1];
        }
        arr[0] = copy;
    }
    return arr;
}

console.log(rotateRightByk(k , arr));