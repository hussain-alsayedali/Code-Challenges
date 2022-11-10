let numbers = [4,3,5]
let size = 2

numbers =  numbers.sort((a,b) => b - a)
console.log(numbers.slice(0,size))
return numbers.reduce((accu, x) => x * accu)