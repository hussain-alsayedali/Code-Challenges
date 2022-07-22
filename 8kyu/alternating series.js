let str = '12345'
str = str.split('')

let smallLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
let bigLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

str = str.map(x=> {
    if(smallLetters.includes(x)){
        return x.toUpperCase()
    }
    else{
        return x.toLowerCase()
    }
}).join('')

console.log(str)
return str






