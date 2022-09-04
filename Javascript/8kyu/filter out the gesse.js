var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
let birds =  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

let newArr = []
birds.forEach((x, i)  => {

    geese.includes(x) ? 0 : newArr.push(x)
    
})
console.log(newArr)