let strArr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
let  k = 2
let consArr =[]
let str = ''
for(let i = 0 ; i< strArr.length - k + 1 ; i++){
    for(let j = i ; j < i +k ; j++){
        str += strArr[j]
    }
    consArr.push(str)
    str = ''
}
let largestSum = 0
let largestIndex = 0

let newArr = consArr.map(x => x.length)

newArr.forEach((x,i) =>{
    if(x > largestSum){
        largestSum = x
        largestIndex = i
    }
})

return consArr[largestIndex]|| ''