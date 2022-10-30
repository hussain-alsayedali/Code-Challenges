let s = "abcdef";
let arr = [1, 2, 5];

s = s.split("");

arr.forEach((x) => {
  if (x <= s.length - 1) {
    s[x] = s[x].toUpperCase();
  }
});

return s.join("");
