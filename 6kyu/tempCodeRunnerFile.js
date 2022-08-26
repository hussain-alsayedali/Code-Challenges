text = text.split(' ')
text = text.map(x =>{
    let asciiFirst = x[0].charCodeAt(0)
    console.log(asciiFirst)
    let tempLetterHolder = text[0]
    x[0] = x[x.length - 1]
    x[x.length - 1] = tempLetterHolder
    
    if(x.length != 1){
        let str = asciiFirst + x[x.length - 1] + x.slice(2,-1) + x[1] 
    }
    else{
        let str = asciiFirst
    }
    
    return str
}).join(' ')




console.log(text)
return text