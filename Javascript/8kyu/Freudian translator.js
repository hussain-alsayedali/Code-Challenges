let string = "This is a test"
string = string.split(' ')
if(string =="") return ''
let sexArr = []
for(let i = 0 ; i< string.length ; i++){
    sexArr.push('sex')
}
sexArr =sexArr.join(' ')
return sexArr