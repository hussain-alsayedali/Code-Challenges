let words = 'If, you can read?'

let nato =  {
    'A': 'Alfa',  'B': 'Bravo',   'C': 'Charlie',
    'D': 'Delta',  'E': 'Echo',    'F': 'Foxtrot',
    'G': 'Golf',   'H': 'Hotel',   'I': 'India',
    'J': 'Juliett','K': 'Kilo',    'L': 'Lima',
    'M': 'Mike',   'N': 'November','O': 'Oscar',
    'P': 'Papa',   'Q': 'Quebec',  'R': 'Romeo',
    'S': 'Sierra', 'T': 'Tango',   'U': 'Uniform',
    'V': 'Victor', 'W': 'Whiskey', 'X': 'Xray',
    'Y': 'Yankee', 'Z': 'Zulu'}

words = words.toUpperCase().split('')

let natoKeys = Object.keys(nato)


let natoStr = words.filter(x => x!= " ").map(x =>{
    if(natoKeys.includes(x)){
       return nato[`${x}`]
    }
    else{
       return x
    }
}).join(' ')



console.log(natoStr)
return natoStr