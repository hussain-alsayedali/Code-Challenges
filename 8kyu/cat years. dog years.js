let humanYears = 3
let ageAll = [humanYears , 15 , 15]
if(humanYears > 1){
    ageAll[1] += 9
    ageAll[2] += 9
}
for(let i = humanYears-3 ; i >= 0 ; i--){
    ageAll[1] += 4
    ageAll[2] += 5
}

return ageAll