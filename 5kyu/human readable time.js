let seconds = 45296


let hoursH =seconds > 3600 ? Math.floor(seconds/3600) : 0
seconds = seconds -hoursH *3600


let minutesH = seconds > 60 ? Math.floor(seconds/60) : 0
seconds = seconds - minutesH *60

let secondsH = seconds


if(secondsH === 60){
    secondsH = 0
    minutesH++
}
if(minutesH === 60){
    minutesH = 0
    hoursH++
}



hoursH = hoursH.toString().split('')
minutesH = minutesH.toString().split('')
secondsH = secondsH.toString().split('')


while(hoursH.length < 2){
    hoursH.unshift(0)
}
while(minutesH.length <2){
    minutesH.unshift(0)
}
while(secondsH.length <2){
    secondsH.unshift(0)
}

let string = [hoursH.join('') , minutesH.join('') , secondsH.join('')]
string = string.join(':')

return string

