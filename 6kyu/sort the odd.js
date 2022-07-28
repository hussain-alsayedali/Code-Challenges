let array = [5, 8, 6, 3, 4]
let oddArr = []
array.forEach( x =>{
    if(x % 2 != 0 ){
        oddArr.push(x)
    }
})

oddArr = oddArr.sort((a,b) => a - b)
array.forEach((x,i) =>{
    if(x % 2 != 0 ){
        array.splice(i,1,oddArr.shift())
    }
})
console.log(array)
return array
