let string = "Lets go to the movies" 

string =  string.replace(/ /g , '').toUpperCase()
string = string.split('').join('  ')

console.log(string)
return string