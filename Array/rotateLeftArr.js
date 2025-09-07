// # Rotate an array left by 1 element
let arr = [1, 2, 3, 4, 5];

function rotateleft(arr) {
    let copy = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length -1] = copy;

    return arr;
}

console.log(rotateleft(arr))