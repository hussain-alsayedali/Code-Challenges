let x = [9, 3, '7', '3']

let strSum = 0
let intSum = 0

x.forEach(x =>{
    if(typeof x == "number"){
        intSum += Number(x)
    }
    else{
        strSum += Number(x)
    }
})

console.log(strSum , intSum)
return intSum - strSum