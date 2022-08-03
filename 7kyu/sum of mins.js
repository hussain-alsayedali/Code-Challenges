let arr = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]
let sum = 0
arr.forEach(array =>{
    sum += Math.min(...array)
})
console.log(sum)
return sum