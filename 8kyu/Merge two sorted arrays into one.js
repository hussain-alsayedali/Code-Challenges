let arr1 = [1, 3, 5, 7, 9]
let arr2  = [10, 8, 6, 4, 2]
let ansArr = []
ansArr.push(...arr1 , ...arr2)

ansArr = Array.from(new Set (ansArr.sort((a,b) => a-b)))
console.log(ansArr)