let a = "abcd"
let b = "cadh"
let z = []

a = a.split("")
b = b.split("")
a.forEach(x =>{
    if(!b.includes(x)){
        z.push(x)
    }
})
b.forEach(x =>{
    if(!a.includes(x)){
        z.push(x)
    }
})
console.log(z)
return z.join("")