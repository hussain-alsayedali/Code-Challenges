let ages = [
    65, 60, 75, 55,
    60, 63, 64, 45
  ]
ages = ages.map(x => x**2).reduce((accu ,x) => accu +x ,0 )
ages = Math.floor((Math.sqrt(ages))/2)
console.log(ages)
return ages