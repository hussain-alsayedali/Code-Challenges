let friends = ["Ryan", "Kieran", "Mark"]
let forSureFriends = []

forSureFriends = friends.filter(x=>{
    return x.length === 4
})
console.log(forSureFriends)