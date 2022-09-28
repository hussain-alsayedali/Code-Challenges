let array  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let number = 3

let evenNums = array.filter(x => x % 2 == 0)
evenNums = evenNums.slice(-number)

console.log(evenNums)
return evenNums