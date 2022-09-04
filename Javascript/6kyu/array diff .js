let a = [1,2,3]
let b = [1]

a = a.filter(x => !b.includes(x))
console.log(a)