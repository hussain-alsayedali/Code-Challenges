let volume = 5;
let side = 5;

if (volume <= 0 || side <= 0) return false;
console.log(side, volume);
return side ** 3 === volume;
