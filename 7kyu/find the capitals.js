let word = 'CodEWaRs'
let indexArr = []
word = word.split('')
word.forEach((x,i) =>{
    if(x.match(/[A-Z]/)){
        indexArr.push(i)
    }
})
console.log(indexArr)
return indexArr