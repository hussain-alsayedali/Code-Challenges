let arr = [9,2,8,7,5,4,0,6]
let counter = arr.length /2 -1
let sum = 0
for(let i = 0 ; i <=counter  ; i++){
    sum += Math.max(...arr) * Math.min(...arr)
    console.log(sum)
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    arr.splice(arr.indexOf(Math.max(...arr)),1)
}
console.log(sum)
return sum