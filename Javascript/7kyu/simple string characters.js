let s = "*'&ABCDabcde12345";

let upperCases = [...s.matchAll(/[A-Z]/g)].length;
let lowerCases = [...s.matchAll(/[a-z]/g)].length;
let digits = [...s.matchAll(/\d/g)].length;
let specailChars = [...s.matchAll(/[^a-zA-Z0-9]/g)].length;
console.log(digits, upperCases, lowerCases, specailChars);

return [upperCases, lowerCases, digits, specailChars];
