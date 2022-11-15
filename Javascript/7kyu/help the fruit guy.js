let bagOfFruits = ["apple", "rottenBanana", "apple"];

if (!bagOfFruits) return [];
bagOfFruits = bagOfFruits.map((fruit) => {
  if (fruit.includes("rotten")) {
    let goodF = fruit.replace("rotten", "").toLowerCase();
    console.log(goodF);
    return goodF;
  }
  return fruit;
});
console.log(bagOfFruits);
return bagOfFruits;
