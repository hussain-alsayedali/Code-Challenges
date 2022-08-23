let s = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
s.sort()

let strStar =''
s[0].split('').forEach(x =>{
    strStar += x +'***'
})
strStar = strStar.slice(0,-3)
console.log(strStar)
return strStar
