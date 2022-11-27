let collection = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];
if (collection.length == 0) return 0;
let obj = {};

collection.forEach((x) => {
  obj[x] = (obj[x] || 0) + 1;
});
console.log(Object.values(obj).sort((a, b) => b - a)[0]);
return Object.values(obj).sort((a, b) => b - a)[0];
