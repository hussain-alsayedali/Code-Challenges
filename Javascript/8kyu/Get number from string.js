let s = "this is number: 7"

s = s.replace(/[^0-9]/ig , '')

console.log(Number(s))
return Number(s)