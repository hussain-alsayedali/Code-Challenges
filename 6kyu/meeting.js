let s ="Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" 
s = s.split(';')
console.log(s)
let list = []

s.forEach(x =>{
    let splited = x.split(':')
    console.log(splited)
    list.push(`(${splited[1].toUpperCase()}, ${splited[0].toUpperCase()})`)
})


list = list.sort()
console.log(list)
return list.join()