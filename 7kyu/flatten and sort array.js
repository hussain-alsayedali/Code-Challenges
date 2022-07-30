let array = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
let flattenArr = []
array.forEach(smallArr =>{
    smallArr.forEach(num =>{
        flattenArr.push(num)
    })
})
flattenArr.sort((a,b) => a-b )
console.log(flattenArr)
return flattenArr