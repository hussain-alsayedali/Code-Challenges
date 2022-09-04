let principal = 1000
let interest = 0.05
let tax = 0.18
let desired = 1100
let count = 0



while(principal < desired){
    principal =principal + (principal * interest) - (interest * tax * principal) 

    count++
}
console.log(principal , count)
return count



