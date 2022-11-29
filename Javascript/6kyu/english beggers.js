let values = [1, 2, 3, 4, 5];
let n = 3;
let beggers = new Array(n).fill(0);
console.log(beggers);

values.forEach((x, i) => {
  beggers[i % n] += x;
});
console.log(beggers);
return beggers;
