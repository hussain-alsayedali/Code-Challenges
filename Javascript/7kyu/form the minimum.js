let values = [4, 7, 5, 7]
values =  Array.from(new Set (values)).sort((a,b) => a - b).join('')
console.log(Number(values))
