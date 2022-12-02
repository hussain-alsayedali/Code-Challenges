let str = "Reverse this string, please!";
if (str.trim() == "") return "";
str = str.split(" ");

str = str.map((x, i) => {
  if (i % 2 != 0) {
    return x.split("").reverse().join("");
  } else {
    return x;
  }
});
console.log(str);
return str.join(" ");
