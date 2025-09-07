function printSubarrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sub = [];
    for (let j = i; j < arr.length; j++) {
      sub.push(arr[j]);
      console.log(sub);
    }
  }
}

printSubarrays([1, 2, 3]);
