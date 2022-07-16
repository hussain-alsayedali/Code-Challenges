let string = 'camelCasing'
string = string.split('')   
let alphabetsUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

let stringSpaced = []
string.forEach((x , i) =>{

    if(alphabetsUp.includes(x)){
        stringSpaced.push(' ',x)
    }
    else(
        stringSpaced.push(x)
    )
})
stringSpaced = stringSpaced.join('')
console.log(stringSpaced)





