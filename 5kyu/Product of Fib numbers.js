let prod = 4895
let fibArr = [0,1,1]
let ans 
let ansArr = []
for(let i = 3 ; i < 100 ; i++){
    fibArr.push(fibArr[i-1] + fibArr[i-2])
}
for(let i = 1 ; i < fibArr.length ; i++){
    console.log((fibArr[i] * fibArr[i-1]))
    if((fibArr[i] * fibArr[i-1]) === prod){
        ans = true
        ansArr = [fibArr[i-1] , fibArr[i] , ans]
        break
    }
    else if((fibArr[i] * fibArr[i-1]) >= prod){
        ans = false
        ansArr = [fibArr[i-1] , fibArr[i] , ans]
        break
    }
}
console.log(ansArr)
return ansArr