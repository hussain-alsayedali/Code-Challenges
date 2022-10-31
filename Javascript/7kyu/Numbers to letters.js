let alpha = "?!abcdefghijklmnopqrstuvwxyz";

alpha = alpha.split("");
alpha.unshift(" ");
alpha = alpha.reverse();

let x = ["4", "24"];

x = x.map((x) => alpha[x - 1]);

return x.join("");
