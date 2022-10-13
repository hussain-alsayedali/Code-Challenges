let arr = [15, 20, 7, 10, 4, 3];
let pos = 2;

arr = arr.sort((a, b) => a - b);

console.log(arr, arr[pos - 1]);
return arr[pos - 1];
