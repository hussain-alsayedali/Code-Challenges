let numbers = [1,1,2]
let numObj = {}

numbers.forEach(x =>{
    numObj[x] = (numObj[x] || 0) + 1
})
console.log(numObj)
for(key in numObj){
    if(numObj[key] === 1){
        console.log(key)
        return Number(key)
    }
}