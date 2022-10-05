let n = 2139

n = n.toString().split('')

for(let i = 0 ; i < n.length - 1; i++){

    if(Number(n[i]) > Number(n[i+1])){
        return false
    }
}
return true