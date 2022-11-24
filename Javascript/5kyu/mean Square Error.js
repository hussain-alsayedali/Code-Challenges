let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let sum = 0;
for (let i = 0; i < firstArray.length; i++) {
  sum += Math.pow(firstArray[i] - secondArray[i], 2);
}
console.log(sum);
return sum / firstArray.length;
