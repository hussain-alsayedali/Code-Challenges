let s = 'abcd'
s = s.split('')

let strArr = []
s.forEach((x,i)=>{
    strArr.push(x.toUpperCase()+x.toLowerCase().repeat(i))
})

strArr = strArr.join('-')
console.log(strArr)
return strArr