let s = "Hello World"

s = s.split('').map(x =>{
    if(x.match(/[a-z]/)){
        return x.toUpperCase()
    }
    else if (x.match(/[A-Z]/)){
        return x.toLowerCase()
    }
    else{
        return x
    }
}).join('')

console.log(s)
return s