//Task 2: Even/Odd & Day Message

//Step 1: Input as strings
let num = 17;

//Step 2: Type conversion
let b = Number(num);

//Step 3: % opertor to check - even/odd
if (b%2==0){
    console.log("Even");
} else {
    console.log("Odd");
}

//Step 4: Day Info
let day = 2;
switch(true) {
    case (day >= 1 && day <=5 ):
        console.log("It's a weekday.");
        break
    case (day == 6 || day == 7):
        console.log("It's the weekend.");
        break
    default:
        console.log("Invalid day.")
}

