let v1 = 80
let v2 = 91
let diff = 37
let timeArr = [0,0,0]

if(v1 > v2){
    return null
}
let speedDiff = v2 - v1
let timeWholeSec =  (diff/speedDiff) * 3600

console.log(timeWholeSec)

let timeHours = timeWholeSec > 3600 ? Math.floor(timeWholeSec / 3600) : 0
timeWholeSec -= timeHours *3600
console.log(timeWholeSec , timeHours)

let timeMins = timeWholeSec > 60 ? Math.floor(timeWholeSec / 60) : 0
timeWholeSec -= timeMins *60

let timeSec = Math.floor(timeWholeSec)


timeArr = [timeHours , timeMins , timeSec ]
console.log(timeArr)
return timeArr
