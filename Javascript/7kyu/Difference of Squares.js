let n = 10;

let squareOfSum = 0;
let sumOfSquares = 0;
for (let i = 0; i <= n; i++) {
  squareOfSum += i;
  sumOfSquares += i ** 2;
}

squareOfSum = squareOfSum ** 2;
console.log(squareOfSum, sumOfSquares);

return squareOfSum - sumOfSquares;
