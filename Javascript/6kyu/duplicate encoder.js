let word = '(( @'
word = word.toLowerCase().split('')
let wordObj = {}
let newArr = []
word.forEach(x =>{
    wordObj[x] = (wordObj[x] || 0 ) + 1
}) 
console.log(wordObj)
word.forEach(x =>{
    if(wordObj[x] === 1){
        newArr.push("(")
    }
    else{
        newArr.push(")")
    }
})
newArr = newArr.join('')
return newArr