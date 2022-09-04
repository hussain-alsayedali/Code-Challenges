let text = "Indivisibilities"

text = text.toLowerCase().split('')
let obj = {}

text.forEach(x =>{
    obj[x] = (obj[x] || 0 ) +1
})

for(key in obj){
    if(obj[key] === 1) delete obj[key]
}

return Object.keys(obj).length