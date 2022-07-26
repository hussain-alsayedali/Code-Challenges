let arr = [':)', ';(', ';}', ':-D']
let validEyes = ';:'.split('')
let validnose = '-~'.split('')
let validmouth =')D'.split('')
let sum = 0

arr.forEach(x =>{
    console.log(x)
    console.log(sum)
    if(x.length == 3){
        if(validEyes.includes(x[0]) && validnose.includes(x[1]) && validmouth.includes(x[2])){
            sum++
        }
    }
    else if(x.length == 2){
        if(validEyes.includes(x[0]) && validmouth.includes(x[1])){
            sum++
        }
    }
})
console.log(sum)