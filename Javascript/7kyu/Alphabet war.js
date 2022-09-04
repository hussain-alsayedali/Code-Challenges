let fight = "z"
fight = fight.split('')
let sum = 0
let obj = {
    'w':4,
    'p':3,
    'b':2,
    's':1,
    'm':-4,
    'q':-3,
    'd':-2,
    'z':-1
}
fight.forEach(x =>{
    if(Object.keys(obj).includes(x)){
        sum += obj[x]
    }
})
if( sum === 0){
    return 'Let\'s fight again!'
}
else if(sum > 0){
    return `Left side wins!`
}
else if(sum < 0){
    return `Right side wins!`
}