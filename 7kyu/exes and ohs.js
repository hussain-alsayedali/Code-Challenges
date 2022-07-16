let str = 'xxoo'
str = str.toLowerCase().split('')

let xoObj ={
    "x" : 0,
    "o" : 0,
}
str.forEach(x =>{
    if(x === 'x' || x === 'o'){
        xoObj[x] += 1
    } 
})
console.log(xoObj)

return xoObj['x'] === xoObj['o']