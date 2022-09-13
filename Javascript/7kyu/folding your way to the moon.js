let distance = 384000000

if(distance < 0) return null

let folded = 0.0001
let counter = 0
while(folded < distance ){
    folded *= 2
    counter++
}
console.log(folded , counter)

return counter