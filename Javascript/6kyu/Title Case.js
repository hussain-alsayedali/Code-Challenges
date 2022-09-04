let title = 'a clash of KINGS'
let minorWords = 'a an the of'

if(title === '') return ''
title = title.split(' ')

if(title.length === 0) return ''
if(minorWords != undefined) minorWords = minorWords.split(' ') 
else minorWords = []

minorWords = minorWords.map(x => x.toLowerCase())

let titleCase = title.map(x => x.toLowerCase()).map((x,i) =>{
    if(!minorWords.includes(x) || i === 0){
        return x[0].toUpperCase() + x.slice(1)
    }
    return x
})
return titleCase.join(' ')  




