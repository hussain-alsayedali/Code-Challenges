let s = "codewarriors";

const VOWELS = "aeoiu".split("");

s = s.split("");

let sum = 0;
let max = 0;
s.forEach((x, i) => {
  if (VOWELS.includes(x)) {
    sum++;
  } else {
    sum > max ? (max = sum) : 0;
    sum = 0;
  }
});

console.log(max);
return max;
