let num = 125
let nth = 2

if (nth < 1) return -1

if(nth > Math.abs(num).toString().length) return 0


num = Math.abs(num).toString().split('').reverse()

console.log(num[nth-1])
return Number(num[nth-1])
