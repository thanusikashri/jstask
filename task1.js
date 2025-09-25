//Task 1: Grade Calculator

//Step 1: Input as strings
let mark = "85";

//Step 2: Type conversion
let a = Number(mark);

//Step 3: Assign grades using switch
let grade;
switch(true){
    case (a >= 90 && a <= 100):
        grade = "A";
        break
    case (a >= 75 && a <= 89):
        grade = "B";
        break
    case (a >= 50 && a <= 74):
        grade = "C";
        break
    case (a < 50):
        grade = "Fail";
        break
    default:
        grade = "Invalid marks";
}

//Step 4: To print the grade
console.log("Grade:",grade);