let name = prompt("Enter your name:");
if (name.trim() === "") {
    alert("Name is required!");
}

let email = prompt("Enter your email:");
if (email.trim() === "") {
    alert("Email is required!");
}

let ageStr = prompt("Enter your age:");
let age = parseInt(ageStr);
if (isNaN(age) || ageStr!=age) {
    alert("Age must be a number!");
}
if (age < 12) {
    alert("Age must be 12 or older!");
}

user = {name: name, email: email, age: age};

alert("Registration successful! Starting quiz...");

let score = 0;
for (let q = 1; q<=3; q++)
{
    let w=Math.floor(Math.random()*11);
    switch(w)
    {
        case 1:
            let q1 = prompt("Q: What is 2 + 2?\n1) 2\n2) 4\n3) 6");
            switch (q1) {
                case "4":
                    score++;
                    break;
            }break;
        case 2:
            let q2 = prompt("Q: What is 3 + 3?\n1) 3\n2) 6\n3) 9");
            switch (q2) {
                case "6":
                    score++;
                    break;
            }break;
        case 3:
            let q3 = prompt("Q: What is 4 + 4?\n1) 4\n2) 8\n3) 12");
            switch (q3) {
                case "8":
                    score++;
                    break;
            }break;
        case 4:
            let q4 = prompt("Q: What is 5 + 5?\n1) 5\n2) 10\n3) 15");
            switch (q4) {
                case "10":
                    score++;
                    break;
            }break;
        case 5:
            let q5 = prompt("Q: What is 6 + 6?\n1) 6\n2) 12\n3) 18");
            switch (q5) {
                case "12":
                    score++;
                    break;
            }break;
        case 6:
            let q6 = prompt("Q: What is 7 + 7?\n1) 7\n2) 14\n3) 21");
            switch (q6) {
                case "14":
                    score++;
                    break;
            }break;
        case 7:
            let q7 = prompt("Q: What is 8 + 8?\n1) 8\n2) 16\n3) 24");
            switch (q7) {
                case "16":
                    score++;
                    break;
            }break;
        case 8:
            let q8 = prompt("Q: What is 9 + 9?\n1) 9\n2) 18\n3) 27");
            switch (q8) {
                case "18":
                    score++;
                    break;
            }break;
        case 9:
            let q9 = prompt("Q: What is 10 + 10?\n1) 10\n2) 20\n3) 30");
            switch (q9) {
                case "20":
                    score++;
                    break;
            }break;
        case 10:
            let q10 = prompt("Q: What is 11 + 11?\n1) 11\n2) 22\n3) 33");
            switch (q10) {
                case "22":
                    score++;
                    break;
            }break;
    }
}
alert("Quiz complete! Calculating results...");
let percentage=(score/3)*100;
let results = {
    name: name,
    email: email,
    totalMarks: score,
    percentage: percentage,};

let resultMsg = "Results:\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Age: " + age + "\n" +
    "Total Marks: " + score + "/3\n" +
    "Percentage: " + percentage + "%\n\n" +
    "Full Data in JSON:\n" + JSON.stringify(results,null,2);
    
alert(resultMsg)