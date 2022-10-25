let str = "apple ban";
str = str.split(" ");

str = str.map((x) => `${x} ${x.length}`);
console.log(str);

return str;
