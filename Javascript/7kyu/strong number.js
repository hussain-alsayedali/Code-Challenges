let n = 145

n = n.toString().split('')
let factorial = 1
let sum =0

n.forEach(x =>{
    for(let i = 1 ; i <= Number(x) ; i++){
        factorial *= i
    }
    sum += factorial
    factorial = 1
})

console.log(sum)
console.log(sum == n.join(""))

return sum == n.join("") ? "STRONG!!!!" : "Not Strong !!"