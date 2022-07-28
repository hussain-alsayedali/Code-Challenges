let strng = 'foo000'
strngArr = strng.split('')
strngArrNoNum = []
let NumArr = []
let hasNum = false
let sliced = false
strngArr.forEach((x,i) => {
    if(Number.isInteger(Number(x))){
        NumArr.push(x)
        if(!sliced){
            strngArrNoNum = strngArr.slice(0,i)
            hasNum = true
            sliced = true
        }
    }
})
if(!hasNum){
    return strng + 1
}

let lengthNeeded = NumArr.length 
NumArr = Number(NumArr.join(''))+1
NumArr = NumArr.toString().split('') 
console.log(NumArr)
while(NumArr.length <= lengthNeeded-1){
    NumArr.unshift('0')
    console.log('num is',NumArr)
}
strngArrNoNum = strngArrNoNum.concat(NumArr)
console.log(strngArrNoNum.join(''))



