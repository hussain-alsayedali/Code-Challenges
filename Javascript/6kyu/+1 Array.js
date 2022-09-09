let arr = [ 9,9,9]
console.log(arr)
  
let badArr = false
if(arr.length === 0) badArr = true
arr.forEach(x =>{
    if(x < 0 || x > 9) {
      badArr = true
    }
})
if(badArr) return null

arr = arr.reverse()
arr[0] += 1 

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === 10){
        arr[i] = 0
        arr[i+1]++
    }
}

console.log(arr[arr.length - 1])

if(!arr[arr.length - 1]) arr[arr.length - 1] = 1
arr = arr.reverse()

console.log(arr)
return arr
