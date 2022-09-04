let h = 30
let bounce = 0.66
let windowHeight = 1.5
let counter = 1
let thisBounce = h * bounce
if(h > 0 && bounce > 0 && bounce < 1 && windowHeight < h ){

    while(thisBounce > windowHeight){
        thisBounce = thisBounce * bounce
        counter = counter + 2
    }
    return counter
}
else{
    return -1
}