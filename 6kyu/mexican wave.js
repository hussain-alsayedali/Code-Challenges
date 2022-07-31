let str = 'meow'
let strArr = str.split('')
let mexArr =  []
let newArr 
for(let i = 0 ; i < str.length ; i++){
    if(strArr[i] === ' ') continue 
    newArr = strArr.map((x,index) => index === i ? x.toUpperCase() : x).join('')
    console.log(newArr)
    mexArr.push(newArr)
}
return newArr