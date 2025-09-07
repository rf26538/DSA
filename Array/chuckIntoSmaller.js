// # Chunk an array into smaller arrays of given size.
// [[1,2], [3,4], [5]]

let arr = [1, 2, 3, 4, 5];
let size=2;

function chunkArray(arr, size) {
    let chucked = [];

    for (let i = 0; i < arr.length; i+=size) {
        chucked.push(arr.slice(i , i+size));
    }

    console.log(chucked);

}

chunkArray(arr, size);