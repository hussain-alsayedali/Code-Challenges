let array = ["a", "b", "c"]

array = array.map((x,i) =>{
    return`${i+1}: ${x}`
} )

console.log(array)
return array