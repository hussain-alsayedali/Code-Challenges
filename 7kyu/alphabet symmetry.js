let arr = ["abode","ABc","xyzD"]
let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

let solvedArr = []
arr.forEach(word =>{
    let counterIndex = 0
    word.toLowerCase().split('').forEach((letter , index) =>{
        if(letter === alphabets[index]){
            counterIndex++
        }
    })
    solvedArr.push(counterIndex)
    counterIndex = 0
})
console.log(solvedArr)
return solvedArr