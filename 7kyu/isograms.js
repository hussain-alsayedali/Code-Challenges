let str = 'aba'
str = str.toLowerCase().split()

newStr = Array.from(new Set(...str))

console.log( str.join('') , newStr.join(''))