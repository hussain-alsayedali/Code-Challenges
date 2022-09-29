let numbers = [3,2,6,8,2,3]

numbers = numbers.sort((a,b) => b-a)

console.log(numbers)

count = 0
sum = 0
i= 0
while(count < 3){
    if(numbers[i] != numbers[i+1]){
        sum += numbers[i]
        count++
    }
    i++
}
console.log(sum)
