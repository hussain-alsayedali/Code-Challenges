let customers = [1,2,3,4,5]

let n = 100
let tilesArr =[]
let count = 0
let obj ={}

if(customers.length === 0){
    return 0
}
  
for(let i = 0 ; i < n ; i++){
    obj[i] = 0
}
console.log(obj)
while(true){
    for(let i = 0 ; i < n ; i++){
        if(obj[i] == 0 &&  customers.length != 0){
            obj[i] = customers[0]
            customers.shift()
        }
        
    }
    for(key in obj){
        obj[key] -=1

    }
    count++
    if(customers.length == 0 && Math.max(...Object.values(obj)) <= 0 ){
        break
    }
}

console.log(count)
return count