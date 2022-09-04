let array = [50,60,70,80]
let weightArr = [0 , 0]
array.forEach((x,i) =>{
    if(i % 2 === 0){
        weightArr[0] += x
    }
    else{
        weightArr[1] +=x
    }
})
console.log(weightArr)
return weightArr