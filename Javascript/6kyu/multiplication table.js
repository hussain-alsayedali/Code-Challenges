let size = 5

let array = []
let CurrentNumArr = []
let currentNum = 1

for(let i = 1 ; i <= size ; i++){
    for(let j = 1; j <= size ;j++){
        CurrentNumArr.push(j*currentNum)
    }
    array.push(CurrentNumArr)
    CurrentNumArr = []
    currentNum++
}

console.log(array)
return array



