let n = 1

for(let i = 0 ; i < 100 ; i++){
    if(2**i == n){
        return true
    }
    else if (2**i > n){
        return false
    }
}