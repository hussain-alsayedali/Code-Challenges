let s = "chruschtschov"
s = s.split('')

let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
let contSum = 0
let vowels = 'aeiou'.split('') 
console.log(s)
let sum = s.reduce((accu, x) =>{
    console.log(accu)
    if(vowels.includes(x)){
        if(contSum < accu) contSum = accu
        return accu = 0
    }
    else if(alphabets.includes(x)){
        accu += alphabets.indexOf(x) + 1 
        if(contSum < accu) contSum = accu
        return accu
    }

    
},0)
console.log(contSum)
return contSum
