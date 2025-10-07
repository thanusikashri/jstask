//Task 3: Voting Eligibility Checker
function votingChecker() {
  let again = true;

  while (again) {
    let name = prompt("Enter your name:");
    let a = prompt("Enter your age:");

    let age = Number(a);

    if (age >= 18 && age<100) {
      alert("Hello! " + name + " you are eligible to vote!");
    } else if (age<18 && age>=5) {
      alert("Sorry! " + name + " you are not eligible to vote.")
    } else {
      alert("Invalid Age!");
    }

    again = confirm("Do you want to check again?");
  }

  alert("Goodbye!");
}

votingChecker();