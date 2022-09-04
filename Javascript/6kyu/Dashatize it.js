let num = -28369

num = Math.abs(num)
if(num % 1 != 0) return 'NaN'

num = num.toString().split('')
console.log(num)

let dashedNum = ''

num.forEach((number , index) =>{
    if( number % 2 == 0 ) dashedNum += number

    else if(index === 0 && number % 2 != 0) dashedNum += number + "-"

    else if(number % 2 != 0 && dashedNum[dashedNum.length -1] != "-") dashedNum += "-" + number + "-"

    else if(number % 2 != 0) dashedNum += number + "-"
})

if(dashedNum[dashedNum.length - 1] === '-'){
    console.log('meow')
    dashedNum = dashedNum.slice(0,dashedNum.length -1 )
} 
console.log(dashedNum)
return dashedNum