let word = 'apple'
word = word.split('')
let list = []
word.forEach((x , i) =>{
    if(x.match(/['a','e','i','o','u','y']/i)){
        list.push(i+1)
    }


})

console.log(list)

return list

