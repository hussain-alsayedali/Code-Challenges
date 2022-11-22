let s = "HelloKata";
let partLength = 9;

s = s.split("");
let strParts = "";
console.log(s, s.length);
for (let i = 0; i < s.length; i++) {
  console.log(s);
  strParts += s[i] + "";
  if ((i + 1) % partLength == 0) {
    strParts += " ";
  }
}

console.log(strParts);
return strParts.trim();
