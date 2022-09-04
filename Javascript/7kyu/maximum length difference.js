let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
let a2 =["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
let maximumSum = 0
if(a1.length ===0 || a2.length === 0){
    maximumSum = -1
}


a1.forEach(str1 =>{
    a2.forEach(str2 =>{
        maximumSum > Math.abs(str1.length - str2.length) ? 0 : maximumSum = Math.abs(str1.length - str2.length)
    })
})
console.log(maximumSum)
