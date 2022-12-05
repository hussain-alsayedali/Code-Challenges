let start = 1;
let end = 9;
let arr = [];

for (let i = start; i <= end; i++) {
  if (!i.toString().includes(5)) arr.push(i);
}
console.log(arr);
return arr.length;
