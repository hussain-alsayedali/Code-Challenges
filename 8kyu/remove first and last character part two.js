let arr = '1,2,3'
arr = arr.split(',')
arr.shift()
arr.pop()
arr = arr.join(' ')
return arr || null