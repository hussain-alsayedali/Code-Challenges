let n = 16387064 
let perfectObj = {}

for(let i = 2 ; i < 300 ; i++){
    for(let j = 2 ; j < 10 ; j++){
        perfectObj[i**j] = [i,j]
        perfectObj[j**i] = [j,i]
    }

}

let objKeys = Object.keys(perfectObj)
console.log(objKeys.includes(n.toString()))

return perfectObj[n] || null

