let str = 'abcdefghijklmnopqrstuvwxyz'

str = str.replace(/[^a-z]/g, '')

console.log(str.length)
return str.length