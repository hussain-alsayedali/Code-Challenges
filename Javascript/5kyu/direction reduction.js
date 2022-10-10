let arr = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"];
let filterdArr = arr.slice();

let i = 0;
while (i < arr.length) {
  console.log(i);
  if (
    (filterdArr[i] === "NORTH" && filterdArr[i + 1] === "SOUTH") ||
    (filterdArr[i] === "SOUTH" && filterdArr[i + 1] === "NORTH")
  ) {
    filterdArr.splice(i, 2);
    i = 0;
    continue;
  } else if (
    (filterdArr[i] === "EAST" && filterdArr[i + 1] === "WEST") ||
    (filterdArr[i] === "WEST" && filterdArr[i + 1] === "EAST")
  ) {
    filterdArr.splice(i, 2);
    i = 0;
    continue;
  }
  i++;
}

console.log(filterdArr);
return filterdArr;
