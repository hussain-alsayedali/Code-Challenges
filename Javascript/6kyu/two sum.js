let numbers = [2,1,2]
let target = 4

let tubleIndex = []
found = false
numbers.forEach((x, indexX)=>{
    numbers.forEach((y,indexY) =>{
        if(x+y === target && indexX !== indexY && found === false){
            tubleIndex.push(indexX , indexY)
            found = true
        }
    })
})
console.log(tubleIndex)