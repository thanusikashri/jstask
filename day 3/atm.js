//ATM Simulator
function ATMsimulator(){
    let pin = prompt("Enter the PIN:");
    let balance = 1000;

    if (pin === "1234") {
        let menu = confirm("Do you want to Withdraw / Deposit / Check Balance?");
        if (menu) {
            let choice = prompt("Enter your choice:\n1 : Withdraw\n2 : Deposit\n3 : Check Balance");
            switch(choice) {
                case "1":
                    let amt1 = prompt("Enter the amount to Withdraw:");
                    let amount1 = Number(amt1);
                    alert("Withdraw successful! New balance: " + (balance-amount1));
                    break;
                case "2":
                    let amt2 = prompt("Enter the amount to Deposit:");
                    let amount2 = Number(amt2);
                    alert("Deposit successful! New balance: " + (balance+amount2));
                    break;
                case "3":
                    alert("Your current balance: " + balance);
                    break;
                default:
                    alert("Please enter a valid choice.");
            }
        } else {
            alert("Maybe next time! Goodbye!")
        }
    } else {
        alert("Invalid Login!")
    }
}

ATMsimulator();