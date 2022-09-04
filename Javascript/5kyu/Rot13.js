let message = "Test"

let changedMes = message.toLowerCase().split('')
message = message.split('')


let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')


let newMes = []

newMes = changedMes.map(x =>{
    if(alpha.includes(x)){
        let index = alpha.indexOf(x)
        let char = alpha[(index+13)%26]
        console.log(char)
        return char
    }
    else return x
})

message.forEach((x,i) =>{
    if(x.toUpperCase() === x){
        newMes[i] = newMes[i].toUpperCase()
    }
})
console.log(newMes)
return newMes.join('')