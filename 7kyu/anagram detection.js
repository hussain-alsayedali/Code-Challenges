let test = 'meow'
let original = 'moew'
test = test.toLowerCase().split('').sort()
original = original.toLowerCase().split('').sort()



if (test.length != original.length){
    console.log(false)
    return false
}

for(let i = 0 ; i < test.length ; i++){
    if(test[i] != original[i]){
       console.log('flaws')
       return false
    }
}
