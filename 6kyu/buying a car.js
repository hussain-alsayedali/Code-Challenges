let startPriceOld = 8000
let startPriceNew = 1200
let savingperMonth = 500
let percentLossByMonth = 1.5

let moneyAva = 0
let months = 0
console.log(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth)
while(moneyAva + startPriceOld < startPriceNew){
    moneyAva += savingperMonth

    startPriceNew -= startPriceNew *(percentLossByMonth/100)
    startPriceOld -= startPriceOld *(percentLossByMonth/100)
    console.log(startPriceNew , startPriceOld)
    console.log(moneyAva + startPriceOld - startPriceNew , percentLossByMonth )
    months++
    if(months % 2 == 1)percentLossByMonth += 0.5
}

console.log(months , moneyAva + startPriceOld - startPriceNew)
return[months , Math.round(moneyAva + startPriceOld - startPriceNew)]