let str = "Asd";
let letter = "s";

let regex = RegExp(letter, "g");
console.log([...str.matchAll(regex)].length);
return [...str.matchAll(regex)].length;
