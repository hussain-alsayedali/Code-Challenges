let weight = 80
let height = 1.8
let bmi = weight / height **2
console.log(bmi)

if(bmi <= 18.5){
    return 'Underweight'
}
else if(bmi <= 25){
    return 'Normal'
}
else if(bmi <= 30){
    return 'Overweight'
}
else if(bmi > 30){
    return 'Obese'
}