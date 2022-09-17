let array =    [[ 0, 1, 2, 3, 4 ],
[ 10,11,12,13,14 ],
[ 20,21,22,23,24 ],
[ 30,31,32,33,34 ]] 

let stringArr = ''

array.forEach(x =>{
    stringArr += `${x}\n` 
})
console.log(array , stringArr)

return stringArr.slice(0,-1)