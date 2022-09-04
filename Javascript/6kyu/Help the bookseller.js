let listOfArt = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
let listOfCat = ["A", "B", "C", "D"]
let obj = {}
listOfCat.forEach(char =>{
    obj[char] = (Number(obj[char]) || 0)
    listOfArt.forEach(book =>{
        if(book[0] === char){
            obj[char] = (Number(obj[char]) || 0) + Number(book.split(" ")[1])
        }
    })
})
console.log(obj)
let str =''
let isempty = true
for(key in obj){
    obj[key] != 0 ? isempty = false : '0'
    str +=`(${key} : ${obj[key]}) - `
}
if(isempty){
    return ''
}
str = str.slice(0 , str.length-3)
return str
