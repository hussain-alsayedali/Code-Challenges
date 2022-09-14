let name = "Jeong-Ho Aristotelis"
name = name.split('')
let price = 30

let sum = name.reduce((accu,x) =>{
    return accu + price
},0)
return sum