let n = 86240 

let i = 2
let primesObj = {}

while (n != 1 ) {
    if( n % i === 0){
        primesObj[i] = (primesObj[i] || 0) + 1
        n = n / i
        continue
    }
    i++

}
console.log(primesObj)

let str = ''

for(key in primesObj){
    if(primesObj[key] != 1) str += `(${key}**${primesObj[key]})`
    else str += `(${key})`
    
}
console.log(str)
return str