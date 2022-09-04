let walk = ['w','e','w','e','w','e','w','e','w','e','w','e']
let locationPointer = [0,0]

walk.forEach(direction =>{
    if(direction === 'n'){
        locationPointer[0]++
    }
    else if(direction === 's'){
        locationPointer[0]--
    }
    else if(direction === 'e'){
        locationPointer[1]++
    }
    else if(direction === 'w'){
        locationPointer[1]--
    }
})
console.log(locationPointer)
if(locationPointer[0] === 0 && locationPointer[1] === 0 && walk.length == 10 ){
    console.log('nice')
}
else {
    console.log('no')
}