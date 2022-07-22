let number = 99
number = number.toString().split('')
if(number[0] === '-'){
    number.splice(0,1)
}

let sum = number.reduce((accu , x) =>  +accu  + +x )
console.log(Number(sum))