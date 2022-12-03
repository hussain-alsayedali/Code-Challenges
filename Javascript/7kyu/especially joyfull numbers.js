let n = 1729;
let m = n.toString().split("");
m = m.map((x) => Number(x));

let sum = m.reduce((accu, x) => accu + x);
let reversdSum = Number(sum.toString().split("").reverse().join(""));
console.log(sum, reversdSum);
console.log(sum * reversdSum);

return sum * reversdSum == n;
