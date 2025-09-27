//Mini Quiz App
function MiniQuiz() {
    let score = 0;
    let ready = confirm("Are you ready to take the quiz?");

    if (ready) {
        let quiz1 = prompt("How does JavaScript run your code?\n1. Compiled\n2. Interpreted\n3. Both");
        switch(quiz1) {
            case "2":
                alert("Correct Answer!");
                score++;
                break;
            default:
                alert("Incorrect Answer!")
        }
        let quiz2 = prompt("Is JavaScript case-sensitive?\n1. True\n2. False");
        switch(quiz2) {
            case "1":
                alert("Correct Answer!");
                score++;
                break;
            default:
                alert("Incorrect Answer!");
        }
        let quiz3 = prompt("Which of the following is a primitive data type in JavaScript?\n1. Array\n2. Symbol\n3. Object");
        switch(quiz3) {
            case "2":
                alert("Correct Answer!");
                score++;
                break;
            default:
                alert("Incorrect Answer!");
        }
        let quiz4 = prompt("Which keyword is used to declare a variable that cannot be reassigned?\n1. var\n2. let\n3. const");
        switch(quiz4) {
            case "3":
                alert("Correct Answer!");
                score++;
                break;
            default:
                alert("Incorrect Answer!");
        }
        let quiz5 = prompt("Which operator is used to compare both value and type?\n1. ===\n2. !=\n3. ==");
        switch(quiz5) {
            case "1":
                alert("Correct Answer!");
                score++;
                break;
            default:
                alert("Incorrect Answer!");
        }

        alert("Your Final Score: " + score + "/5");
    }
    else {
        alert("Maybe next time! Goodbye!")
    }
}

MiniQuiz();