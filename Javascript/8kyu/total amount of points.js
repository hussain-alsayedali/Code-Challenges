let games = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
let points = 0
let our ,  enemy
games.forEach(x =>{
    [our ,  enemy] = x.split(':')
    console.log(our ,enemy)
    if(our > enemy){
        points += 3
    }
    else if(our  === enemy){
        points++
    }
})

console.log(points)
return points