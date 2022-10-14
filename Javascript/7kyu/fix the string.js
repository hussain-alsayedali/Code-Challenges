let s = "coDe";

s = s.split("");

lowerSum = s.reduce((accu, x) => {
  if (x == x.toLowerCase()) {
    return accu + 1;
  } else {
    return accu;
  }
}, 0);

biggerSum = s.reduce((accu, x) => {
  if (x == x.toUpperCase()) {
    return accu + 1;
  } else {
    return accu;
  }
}, 0);

console.log(biggerSum, lowerSum);
if (biggerSum <= lowerSum) return s.join("").toLowerCase();
else return s.join("").toUpperCase();
