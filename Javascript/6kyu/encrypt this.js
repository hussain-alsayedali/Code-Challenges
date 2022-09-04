let text = "A wise old owl lived in an oak"

let str 
text = text.split(' ')
text = text.map(x =>{
    let asciiFirst = x[0].charCodeAt(0)
    console.log(asciiFirst)
    let tempLetterHolder = x[0]
    x[0] = x[x.length - 1]
    x[x.length - 1] = tempLetterHolder
    
    if(x.length > 2){
        str = asciiFirst + x[x.length - 1] + x.slice(2,-1) + x[1] 
    }
    else if (x.length === 2){
        str = asciiFirst + x[1]
    }
    else{
        str = asciiFirst
    }
    
    return str
}).join(' ')




console.log(text)
return text
