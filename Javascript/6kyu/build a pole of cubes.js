let n = 91716553919377
let iterator = 1
let sum = 0

while(1){
    for(let i = iterator ; i > 0 ; i-- ){
        sum += i**3
    }
    if(sum == n){
        console.log(iterator)
        break
    }
    else if (sum > n){
       console.log(-1)
       break
    }
    sum = 0
    iterator++
}