let iterable = [1,2,2,3,3]
if(!Array.isArray(iterable)){
    iterable = iterable.split('')
}
let uniqueArr = []
iterable.forEach((x , i) =>{
    if(x !== uniqueArr[uniqueArr.length-1]){
        uniqueArr.push(x)
    }
})
console.log(uniqueArr)