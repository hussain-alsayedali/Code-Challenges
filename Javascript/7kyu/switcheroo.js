let x = "abc"

x = x.split("")

x = x.map(x =>{
    if(x =='a'){
        return "b"
    }
    else if(x =="b"){
        return "a"
    }
    else{
        return x
    }
}).join('')
console.log(x)
return x
