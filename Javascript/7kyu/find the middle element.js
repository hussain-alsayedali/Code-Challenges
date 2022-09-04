let triplet = [5, 14, 10]
const tripletConst = [...triplet]
triplet = triplet.sort((a,b) => a-b)
console.log(triplet)
let middleValue = triplet[1]
let middleIndex = tripletConst.indexOf(middleValue)
console.log(tripletConst)
console.log(middleIndex)
// return middleIndex