let a = [2,2,3]
let b = [2,4,4]

let sumA = a.reduce((accu,x) =>accu*x)
let sumB = b.reduce((accu,x) =>accu*x)
return Math.abs(sumA-sumB)