let str = 'abracadabra'
str = str.split('')
let vowels = 'aeiou'.split('')
let count = 0


str.forEach(x => vowels.includes(x) ? count++ : 0)
console.log(count)
