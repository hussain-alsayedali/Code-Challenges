let string = "aba"
string = string.split('')

let stringCounter = {}
string.forEach(x =>{
    stringCounter[x] = (stringCounter[x] || 0 ) + 1
})
console.log(stringCounter)
return stringCounter