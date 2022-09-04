let names = []   
let likesString = ''
if(names.length === 0){
    likesString = `no one likes this`
}
if(names.length === 1){
    likesString =`${names[0]} likes this`
}
if(names.length === 2){
    likesString =`${names[0]} and ${names[1]} likes this`
}
if(names.length === 3){
    likesString =`${names[0]}, ${names[1]} and ${names[2]} likes this`
}
if(names.length > 3){
    likesString =`${names[0]}, ${names[1]} and ${names.length-2} others likes this`
}
console.log(likesString)