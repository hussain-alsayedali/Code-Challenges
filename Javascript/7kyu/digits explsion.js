let s = "3120";
s = s.split("");
let sArr = [];

s.forEach((x) => {
  sArr.push(x.repeat(x));
});

sArr = sArr.join("");
console.log(sArr);
return sArr;
