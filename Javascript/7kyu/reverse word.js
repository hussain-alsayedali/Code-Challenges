let str = "The quick brown fox jumps over the lazy dog.".split(" ");
let strArr = [];
str.forEach((x) => {
  console.log(x.split("").reverse().join(""));
  strArr.push(x.split("").reverse().join(""));
});
console.log(strArr.join(" "));
