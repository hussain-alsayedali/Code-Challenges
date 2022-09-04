let n = 5750
let d = 0

let arrNum = []
let arrAccepted  =[]
for(let i = 0 ; i <= n ; i++){
    arrNum.push(i**2)
}
console.log(arrNum)

arrNum.forEach( num => {
    num.toString().split('').forEach(x =>{
        if(Number(x) === d){
            arrAccepted.push(x)
        }
    })
})
return arrAccepted.length