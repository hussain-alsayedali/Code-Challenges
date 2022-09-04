let m = 250
let n = 500


let divisorsArr = []
let sumSquared 
let allNums = []
for(let i = m ; i <= n ;i++){
    for(let j = 1 ; j <= i ; j++){
        if(i % j === 0){
            divisorsArr.push(j)
        }
    }
    sumSquared = divisorsArr.reduce((accu , x) =>accu + x **2 , 0)
    console.log(Math.sqrt(sumSquared))
    if(Math.sqrt(sumSquared) % 1 === 0){
        allNums.push([i , sumSquared])
    }
    divisorsArr = []
    
}

console.log(allNums)
return allNums