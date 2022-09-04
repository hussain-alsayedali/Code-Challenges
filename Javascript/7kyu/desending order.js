let n = 42145
n = Number(n.toString().split('').sort((a,b) => b-a).join(''))
console.log(n)
return n