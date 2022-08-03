let a = [66, 201]
let limit = 200

let filterdArr = a.filter(x => x <= limit)
return a.join('') === filterdArr.join('')