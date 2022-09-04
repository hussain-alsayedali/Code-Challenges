let string = 'L0ND0N'

string = string.split('').map(x =>{
    if(x == '0'){
        return 'O'
    }
    else if(x == '5'){
        return 'S'
    }
    else if(x == '1'){
        return 'I'
    }
    else{
        return x
    }
}).join('')
console.log(string)
return string
