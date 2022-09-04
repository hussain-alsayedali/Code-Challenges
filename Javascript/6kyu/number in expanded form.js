let num = (70304).toString().split('')
console.log(num)
let strArr = []
num.forEach((x , i) =>{
    if(x != 0){
        strArr.push(x+'0'.repeat(num.length-i-1) )
    }
})


strArr = strArr.join(' + ')
console.log(strArr)