let n = 100

if(!Number.isInteger(n) || n <= 0) return false
let sum = 0
for(let i = 1 ; i <= n ; i++ ){
    sum +=i
}
console.log(sum)
return sum

Number.isInteger()