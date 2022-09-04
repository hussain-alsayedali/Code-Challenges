let s = 'abcdef'
s = s.split('')

let altArr = []

altArr[0] = s.map((x,i) =>{
    if(i%2 === 0){
        return x.toUpperCase()
    }
    else{
        return x
    }
}).join('')

altArr[1] = s.map((x,i) =>{
    if(i%2 === 1){
        return x.toUpperCase()
    }
    else{
        return x
    }
}).join('')
console.log(altArr)
return altArr;
