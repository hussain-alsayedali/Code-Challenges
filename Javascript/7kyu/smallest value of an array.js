let arr = [2,2,1,4]
let toReturn = "value"

let smallestIndex = 0
let smallestValue = arr[0]
arr.forEach((x,i) =>{
    if(smallestValue > x){
        smallestValue = x
        smallestIndex = i
    }
})

console.log(smallestIndex , smallestValue)
if(toReturn == "value"){
    return smallestValue
}
else{
    return smallestIndex
}