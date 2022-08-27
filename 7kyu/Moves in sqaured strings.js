function vertMirror(strng) {
    let vertedString = strng.split('\n').map(word =>
        word.split('').reverse().join('')
    ).join('\n')
    console.log(vertedString)
    return vertedString
}
function horMirror(strng) {
    let horString = strng.split('\n').reverse()
    .join('\n') 
    console.log(horString)
    return horString
}
function oper(fct, s) {
    fct(s)
}
let strng = "abcd\nefgh\nijkl\nmnop"
vertMirror(strng)
horMirror(strng)