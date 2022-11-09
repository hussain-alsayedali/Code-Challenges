let n = 2
let xs = [1,2,3]
if(n == 0) return []
xs = xs.sort((a,b) => a-b)

console.log(xs.slice(-n))
return xs.slice(-n)