let str = 'Hello World'
str = str.split('')
let newStr = []
str.forEach((x,i) =>{
    newStr.push(x,x)
})
console.log(newStr)
return newStr
