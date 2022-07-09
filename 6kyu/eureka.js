let a = 1
let b = 10

let sum = 0
let eurkaArr = []
for(let i = a ; i <= b ; i++){
    let arrNum = i.toString().split("")
    sum = arrNum.reduce((accu, x, i) => {
        return accu+Number(x)**(i+1)

    },0)
    if (sum === i){
        eurkaArr.push(i)
    }

}
return eurkaArr