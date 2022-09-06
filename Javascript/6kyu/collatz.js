let n = 3

let collList = []
while(n != 1){
    collList.push(n)
    if(n % 2 == 0){
        n /=2
    }
    else{
        n = 3*n + 1
    }
}
collList.push(1)

let collStr = collList.join('->')
console.log(collList , collStr)
return collStr


