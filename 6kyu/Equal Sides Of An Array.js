let arr = [1,2,3,4,3,2,1]
let leftSum = 0
let rightSum = 0
let indexmid = -1
arr.forEach((value ,index) =>{
    for(let i = 0 ; i < index  ; i++){
        leftSum += arr[i]
    }
    for(let i = arr.length-1 ; i > index  ; i--){
        rightSum += arr[i]
    }
    if(leftSum === rightSum){
        indexmid = index
    }
    console.log(leftSum , rightSum)
    leftSum = 0
    rightSum = 0
})
console.log(indexmid)