let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]  
let obj = {} 


arr.forEach(x =>{
    obj[x] = (obj[x] || 0) +1
})
let objValues = Object.values(obj)
let highestRepAva = Math.max(...objValues)
console.log(highestRepAva)

for(key in obj){
    if(obj[key] != highestRepAva) delete obj[key]
}
let orderedObjKeys = Object.keys(obj).sort((a,b) => b-a )

return Number(orderedObjKeys[0])