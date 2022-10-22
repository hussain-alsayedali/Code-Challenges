let str = "This is a string";
let loc = 3;
let num = 3;

str = str.split(" ");
strArr = [];

for (let i = 0; i < num; i++) {
  strArr.push(str[loc]);
}
strArr = strArr.join("-");
return strArr;
