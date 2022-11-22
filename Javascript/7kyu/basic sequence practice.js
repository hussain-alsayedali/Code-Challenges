let n = 5;

let seqArr = [0];

for (let i = 1; i <= Math.abs(n); i++) {
  seqArr[i] = i + seqArr[i - 1];
}
console.log(seqArr);
if (n < 0) return seqArr.map((x) => (x != 0 ? x * -1 : x));
return seqArr;
