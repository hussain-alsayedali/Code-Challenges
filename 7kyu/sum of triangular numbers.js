let n = 6
let sum = 0
let triSums = []
for(let i = 1 ; i <= n ; i++ ){
    sum += i
    triSums.push(sum) 
}
if(triSums.length === 0){
    return 0
}
return triSums.reduce((accu, x) => accu + x) 