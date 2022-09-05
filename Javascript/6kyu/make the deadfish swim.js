let data = "sdiidoio".split('')

let values = []
let sum = 0
data.forEach(x =>{
    if(x == 'i') ++sum
    else if(x == 'd') --sum
    else if(x == 's') sum = Math.pow(sum,2)
    else if(x == 'o') values.push(sum)

    console.log(sum)
})
console.log(values)
return values