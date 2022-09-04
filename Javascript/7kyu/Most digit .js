let array = [1, 10, 100]

let maxDigits = 0
let maxNum = 0

array.forEach(num =>{
   let lengthCurr = num.toString().split('').length
   if(lengthCurr > maxDigits){
    maxDigits = lengthCurr
    maxNum = num
   }
})
return maxNum