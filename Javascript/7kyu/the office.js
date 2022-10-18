let meet = {
  tim: 0,
  jim: 2,
  randy: 0,
  sandy: 7,
  andy: 0,
  katie: 5,
  laura: 1,
  saajid: 2,
  alex: 3,
  john: 2,
  mr: 0,
};
let boss = "laura";

sum = 0;
for (person in meet) {
  if (person == boss) {
    sum += meet[person] * 2;
  } else {
    sum += meet[person];
  }

  console.log(meet[person]);
}
console.log(sum);
avg = sum / Object.keys(meet).length;
console.log(avg);

return avg <= 5 ? "Get Out Now!" : "Nice Work Champ!";
