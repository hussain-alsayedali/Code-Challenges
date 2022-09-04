let dadYearsOld = 36
let sonYearsOld = 7

let dadStarterOld = dadYearsOld - sonYearsOld
let sonStarterOld = 0

let doubleAge
let foundTwice = false
while(!foundTwice){
    if(dadStarterOld == sonStarterOld *2){
        foundTwice = true
        doubleAge = Math.abs(dadYearsOld - dadStarterOld)
    }
    else{
        dadStarterOld++
        sonStarterOld++
    }
}
console.log(doubleAge)