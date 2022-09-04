let n = 1234567 
n = n.toString().split('')

let divSeq = []
let oldNum = 0

for(let i = 0 ; i <= 10 ; i++ ){
    divSeq.push((10**i) % 13) 
}


do {
    var sum = n.reverse().reduce((accu , x , i) =>{
        return   accu +=  +x  * divSeq[i]
    } , 0 )
    n = sum.toString().split('')
    console.log(sum == oldNum , sum , oldNum)
    if(sum === oldNum){
        break
    } 
    oldNum = sum
    
} while(1)

console.log(sum)
return sum




