let s = "bitcoin take over the world maybe who knows perhaps"
s = s.split(' ')

let shortestCounter = s[0].length

s.forEach(x =>{
    if(x.length < shortestCounter){
        shortestCounter = x.length
    }
})
console.log(shortestCounter)