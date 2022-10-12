let n = 89;

nArr = n.toString().split("");

let sum = nArr.reduce((accu, x, i) => {
  return accu + (+x) ** (i + 1);
}, 0);
console.log(sum == n);
return n === sum ? "Disarium !!" : "Not !!";
