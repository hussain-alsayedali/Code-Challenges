let string = "attitude"

var letters = "abcdefghijklmnopqrstuvwxyz".split('')


sum = string.split('').reduce((accu , x) =>{
    
    return accu + letters.indexOf(x) + 1
}, 0)
console.log(sum)
return sum