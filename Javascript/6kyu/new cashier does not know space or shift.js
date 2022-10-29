var orders = [
  "Burger",
  "Fries",
  "Chicken",
  "Pizza",
  "Sandwich",
  "Onionrings",
  "Milkshake",
  "Coke",
];

let ordersObj = {};
orders.forEach((x) => {
  ordersObj[x] = 0;
});
let input = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza";
input = input.split("");

orders = orders.map((x) => x.toLowerCase());
console.log(orders);

let string = "";
let ordersSpaced = [];

input.forEach((x) => {
  string += x;
  if (orders.includes(string)) {
    ordersSpaced.push(string);
    string = "";
  }
});
ordersSpaced = ordersSpaced.map((x) => x[0].toUpperCase() + x.slice(1));

ordersSpaced.forEach((x) => {
  ordersObj[x]++;
});
console.log(ordersObj);

let kitchenPref = [];
for (key in ordersObj) {
  for (let i = 0; i < ordersObj[key]; i++) {
    kitchenPref.push(key);
  }
}
console.log(kitchenPref);
return kitchenPref.join(" ");
