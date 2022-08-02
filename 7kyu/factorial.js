let n = 10
if(n < 0 || n > 12){
    throw new RangeError("0 - 12")
  }
if (n === 0) return 1

sum = 1
for(let i = n ; i > 1 ; i-- ){
    console.log(i)
    sum = sum * i
}


console.log(sum)
return sum 
