let array1 = ["a", "a", "b", "b"]
let array2 = ["a", "c", "b", "d"]

let sum = array1.reduce((accu , x , i) =>{
    if(x == array2[i]){
        return accu + 4
    }
    else if(array2[i] === 0){
        return accu
    }
    else{
        return accu -1
    }
}, 0)

console.log(sum)
return sum > 0 ? sum : 0





