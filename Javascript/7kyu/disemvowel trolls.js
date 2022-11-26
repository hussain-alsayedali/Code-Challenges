let str = "This website is for losers LOL!";
const VOWELS = "aeoiu".split("");
str = str.split("");

let removedStr = [];
str.forEach((char) => {
  if (!VOWELS.includes(char.toLowerCase())) {
    removedStr.push(char);
  }
});
console.log(removedStr.join(""));
return removedStr.join("");
