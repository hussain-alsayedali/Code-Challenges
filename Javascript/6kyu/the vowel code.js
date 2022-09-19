var vowel = {
    'a' : 1,
    'e' : 2,
    'i' : 3,
    'o' : 4,
    'u' : 5,
}
var vowels = 'aeiou'.split('')
var nums = '12345'.split('')

function encode(string) {
    let strArr = string.split('')
    strArr = strArr.map(x =>{
        if(vowels.includes(x)){
            return vowel[`${x}`]
        }
        else{
            return x
        }
        
    }).join('')
    
    console.log(strArr)
    return strArr
  }
  
  function decode(string) {
    let strArr = string.split('')
    strArr = strArr.map(x =>{
        let place = Object.keys(vowels).find(key => nums[key] ===  x)
        // console.log(place)
        if(place){
            return vowels[place]
        }
        else{
            return x
        }
        
    }).join('')
    console.log(strArr)
    return strArr
  }

encode("hello")
decode("h2llo")