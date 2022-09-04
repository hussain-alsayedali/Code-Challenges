let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let indexPostive = []
arr.forEach((x,i) =>{
    if(x > 0){
        indexPostive.push(i)
    }
})
if(indexPostive.length === arr.length){
    console.log('sum')
    return arr.reduce((accu , x) => accu+x )
}

let sum = 0
let nowSum = 0
let j = 0
let i = indexPostive[j]
let k = 0
let z = indexPostive[k]
let newArr = arr.slice(indexPostive[j] , indexPostive[j+1] +1)

while(i <= indexPostive[indexPostive.length -1 ]){
    while(z <= indexPostive[indexPostive.length -1 ]){
        nowSum = newArr.reduce((accu , x) => {return accu + x},0)
        if(nowSum > sum){ sum = nowSum};
        k++
        newArr = arr.slice(indexPostive[j] , indexPostive[k] +1)
        console.log(newArr)
        z = indexPostive[k]

    }

    j++
    k= j 
    z = indexPostive[k]
    // newArr = arr.slice(indexPostive[j] , indexPostive[j+1] +1)
    i= indexPostive[j]
}
console.log(sum)
return sum