let n = 25

let zeros = n.toString().length

let squared = n**2



console.log(squared % 10**zeros == n ? "Automorphic" : "Not!!") 
return squared % 10**zeros == n ? "Automorphic" : "Not!!"
 
