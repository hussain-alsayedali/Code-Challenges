let l = [1,2,'a','b']
l = l.filter(x => typeof(x) != 'string')
console.log(l)
return l