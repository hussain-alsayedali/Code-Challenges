let x  = 'man i need a taxi up to ubud'
let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
x = x.split(' ')
let biggestSum = 0
let biggestIndex = 0
let wordSum = 0
console.log(x)
console.log(letters)

x.forEach( (word , index) =>{
    wordSum = word.split('').reduce((accu  , letr) => accu + letters.indexOf(letr) + 1 , 0)
    console.log(word.split('') , wordSum)

    if (wordSum > biggestSum){
        biggestSum = wordSum
        biggestIndex = index
    }
})
console.log(biggestSum , biggestIndex)
return x[biggestIndex]