let arr = [ 1, 1, 1, 2, 1, 1 ]
let unique 
let obj = {}
arr.forEach((x) =>{
    obj[x] = (obj[x] || 0 ) +1
})

for (key in obj){
    if(obj[key] === 1){
        unique = key
    }
}
console.log(Number(unique))