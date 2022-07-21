let exam = 100
let projects = 6
grade = 0
if(exam > 90 || projects > 10){
    grade = 100
}
else if(exam > 75 && projects >= 5){
    grade = 90
}
else if(exam > 50 && projects >= 2){
    grade = 75
}
return grade