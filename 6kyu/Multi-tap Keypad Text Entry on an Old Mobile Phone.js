let phrase = "WHERE DO U WANT 2 MEET L8R"

phrase = phrase.toUpperCase().split('')
console.log(phrase)
let oneClick = 'ADGJMPTW *#1'.split('')
let twoClicks = 'BEHKNQUX0'.split('')
let threeClicks = 'CFILOREVY'.split('')
let fourClicks = 'SZ234568'.split('')
let fiveClicks = '79'.split('')

let sum = phrase.reduce((accu , x) =>{
    console.log(accu , x)
    if(oneClick.includes(x) || x === ' ') return ++accu
    else if(twoClicks.includes(x)) return accu + 2
    else if(threeClicks.includes(x)) return accu + 3
    else if(fourClicks.includes(x)) return accu + 4
    else if(fiveClicks.includes(x)) return accu + 5
    return accu
},0)
console.log(sum)
return sum