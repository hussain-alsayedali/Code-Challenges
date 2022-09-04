let number = 1
let str = []

for(let i = 1 ; i <= 10 ; i++){
    str.push(`${i} * ${number} = ${number*i}`)
}
str = str.join('\n')
console.log(str)
return str
  