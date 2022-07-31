let busStops = [[10,0],[3,5],[5,8]]
let sum = 0
busStops.forEach(x =>{
    sum += x[0] - x[1]
})
return sum