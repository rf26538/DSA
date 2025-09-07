// # Rotate an array right by 1 element
let arr = [1, 2, 3, 4, 5];

function rotateRight(arr) {
    let copy = arr[arr.length - 1]
    for (let i = arr.length - 1; i >= 0 ; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = copy;

    return arr;
}

console.log(rotateRight(arr))