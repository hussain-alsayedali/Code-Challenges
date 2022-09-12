let str = 'keig'

// let regex = /[A-Z]/g
// let arr = Array.from([...str.matchAll(regex)])

// str = str.split(regex)

// let index = 1
// str = str.map((x,i) =>{
//     if(i != 0){
//         return (arr[i-1]).toString().toLowerCase() + x
//     }
//     else{
//         return x
//     }

// }).join('-')

// console.log(str)
// return str
// 

str = str.replace(/[^a-z]/gi , '').split('')

let dashedStr = ''
str.forEach((x,i) =>{
    if(x != x.toUpperCase()){
        dashedStr += x 
    }
    else{
        dashedStr += '-'+ x.toLowerCase()
    }
})

if(dashedStr[0] =='-') dashedStr = dashedStr.slice(1)
console.log(dashedStr)
return dashedStr