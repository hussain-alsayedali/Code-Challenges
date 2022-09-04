let words = "Thi1s is2 3a T4est"
counter = 1
let orderdWord = []
words = words.split(' ')

for(let i = 0 ; i < words.length  ;i++ ){
    for(let j = 0 ; j < words.length ; j ++){
        console.log(words[j].split(''))
        words[j].split('').forEach(character =>{
            if(character === counter.toString()){
                orderdWord.push(words[j])
                counter++
            }
        })
    }
}
console.log(counter)
console.log(orderdWord.join(" "))